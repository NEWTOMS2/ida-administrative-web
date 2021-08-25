import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersService } from 'src/app/core/services/users.service';
import { Customer } from 'src/app/core/models/customer.interface';
import { aws_connect, emailPattern, images } from 'src/app/core/config/configuration';
import { faUserPlus, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

import 'amazon-connect-streams';
import { RealtimeCommunicationsService } from 'src/app/core/services/realtime-communications.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { RegisterClaimDialogComponent } from './register-claim-dialog/register-claim-dialog.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-aws-connect-panel',
  templateUrl: './aws-connect-panel.component.html',
  styleUrls: ['./aws-connect-panel.component.scss']
})
export class AwsConnectPanelComponent implements OnInit {
  public title = searchTranslation(this.translateService, 'ATTENTION_REQUESTS');
  public claimForm!: FormGroup;
  public customer!: Customer;
  public showCcp = true;
  public contactLogo = images.contactLogo;
  private contactId!: string | null;
  private employee!: User | undefined;
  public addUserIcon = faUserPlus;
  public claimIcon = faEnvelopeOpenText;

  public contactDetailSaved = false;
  spinnerLoader = false;


  constructor(
    private translateService: TranslateService,
    private userService: UsersService,
    private realtimeCommunications: RealtimeCommunicationsService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationsService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  setEmptyCustomerInfo(): void {
    this.customer = {
      uuid: 0,
      email: "",
      name: "",
      lastname: "",
      phoneNumber: ""
    }
    this.contactDetailSaved = false;
  }

  ngOnInit(): void {
    this.setEmptyCustomerInfo();
    this.buildUser();
    this.buildForm();
  }

  ngOnDestroy(): void {
    connect.core.terminate();
  }

  @ViewChild('awsWrapper', { static: false })
  public awsWrapper!: ElementRef;

  @ViewChild('ccpDiv', { static: false })
  public ccpDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.initAwsCcp();
  }

  private buildUser(): void {

    this.activatedRoute.data.subscribe((data: Partial<{ user: User }>) => {
      this.employee = data.user
    });
  }

  initAwsCcp(): void {
    const ccpUrl = aws_connect.ccpUrl;
    connect.core.initCCP(this.ccpDiv.nativeElement, {
      ccpUrl,
      // loginPopup: true,
      loginUrl: aws_connect.loginUrl,
      softphone: {
        allowFramedSoftphone: true
      },
      loginPopupAutoClose: true,
      loginOptions: {
        autoClose: true,
        height: 520,
        width: 420,
        top: 40,
        left: 40
      },
      region: aws_connect.region,
    });

    connect.core.onAuthFail(() => {
      connect.core.terminate();
      document.getElementById("ccpDiv")?.parentElement?.remove()
      this.showCcp = false;
    })

    connect.contact((contact) => {
      contact.onAccepted((contact) => {
        var attributeMap: any = contact.getAttributes();
        this.contactId = contact.contactId;
        this.contactDetailSaved = false;
        var phone = JSON.stringify(attributeMap["phoneNumber"]["value"]).split('+')[1].split('"')[0];
        this.userService.getUserByPhoneNumber(phone).toPromise().then((user) => {
          this.setEmptyCustomerInfo();
          if (user) {
            this.customer = {
              uuid: user.uuid,
              email: user.email,
              name: user.name,
              lastname: user.last_name,
              phoneNumber: "+" + user.phone_number
            }
            this.saveContactDetails();
          } else {
            this.customer.phoneNumber = "+" + phone
          }
        });
      });

      contact.onEnded(()=> {
        this.contactId = null;
      });
      // contact.onIncoming(function(contact) {});
      // contact.onRefresh(function(contact) {});
      // contact.onConnected(function() {});
    });
  }

  reloadCurrentRoute() {
    window.location.reload();
  }

  async saveContactDetails(): Promise<void> {
    if (this.contactId) {
      await this.realtimeCommunications.updateDetails(
        this.contactId,
        this.customer.uuid,
        this.employee?.uuid || 0
      ).toPromise()
        .then(() => {
          this.contactDetailSaved = true;
        })
        .catch((error) => {
          error = "GENERIC_ERROR"
          this.notification.showErrorToast(error);
        })
    }
  }

  registerCustomer(createClaim: boolean): void {
    this.openRegisterCustomerModal().subscribe(async (user) => {
      if (user) {
        await this.loadNewCustomerData(user);
        if (!this.contactDetailSaved) {
          await this.saveContactDetails();
        }
        if (createClaim) {
          this.openRegisterClaimModal();
        }
      }
    })
  }

  openRegisterCustomerModal(): Observable<any> {
    return this.dialog.open(RegisterCustomerComponent, {
      width: '700px',
      autoFocus: false,
      data: {
        phoneNumber: this.customer.phoneNumber,
      }
    }).afterClosed();
  }

  registerClaim(): void {
    if (this.customer.email == "") {
      this.registerCustomer(true);
    } else {
      this.openRegisterClaimModal();
    }
  }

  openRegisterClaimModal(): void {
    this.dialog.open(RegisterClaimDialogComponent, {
      width: '700px',
      autoFocus: false,
      data: {
        email: this.customer.email
      }
    });
  }

  async loadNewCustomerData(user: any): Promise<void> {
    const newUser = await this.userService.getUserByPhoneNumber(user.phone_number).toPromise();
    this.customer = {
      uuid: newUser.uuid,
      email: user.email,
      name: user.name,
      lastname: user.last_name,
      phoneNumber: "+" + user.phone_number
    }
  }

  private buildForm(): void {
    this.claimForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      type: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

}
