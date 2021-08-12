import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersService } from 'src/app/core/services/users.service';
import { Customer } from 'src/app/core/models/customer.interface';
import { aws_connect, images } from 'src/app/core/config/configuration';

import 'amazon-connect-streams';
import { RealtimeCommunicationsService } from 'src/app/core/services/realtime-communications.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-aws-connect-panel',
  templateUrl: './aws-connect-panel.component.html',
  styleUrls: ['./aws-connect-panel.component.scss']
})
export class AwsConnectPanelComponent implements OnInit {
  public title =  searchTranslation(this.translateService, 'ATTENTION_REQUESTS');
  public customer!: Customer;
  public showCcp = true;
  public contactLogo = images.contactLogo;
  private contactId!: string;
  private employee!: User | undefined;
  spinnerLoader = false;
  constructor(
      private translateService: TranslateService,
      private userService: UsersService,
      private realtimeCommunications: RealtimeCommunicationsService,
      private activatedRoute: ActivatedRoute,
      private notification: NotificationsService
    ) { }

  setEmptyCustomerInfo(): void {
    this.customer = {
      uuid: 0,
      email:"",
      name: "",
      lastname: "",
      phoneNumber:""
    }
  }

  ngOnInit(): void {
    this.setEmptyCustomerInfo();
    this.buildUser()
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

  private buildUser(): void{

    this.activatedRoute.data.subscribe((data: Partial<{ user: User}>) => {
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

    connect.core.onAuthFail(()=>{
      connect.core.terminate();
      document.getElementById("ccpDiv")?.parentElement?.remove()
      this.showCcp = false;
    })

    connect.contact((contact) => {
      contact.onAccepted((contact) => {
        var attributeMap: any = contact.getAttributes();
        this.contactId= contact.contactId
        var phone = JSON.stringify(attributeMap["phoneNumber"]["value"]).split('+')[1].split('"')[0];
        this.userService.getUserByPhoneNumber(phone).toPromise().then((user) => {
          this.setEmptyCustomerInfo();
          if (user){
            this.customer = {
              uuid: user.uuid,
              email: user.email,
              name: user.name,
              lastname: user.last_name,
              phoneNumber: "+" + user.phone_number
             }
          }else {
            this.customer.phoneNumber = "+" + phone
          }
        });
      });
      contact.onEnded(()=> {
        // this.setEmptyCustomerInfo();
      });

      // console.log(contact.contactId ) 
      // contact.onIncoming(function(contact) {});
      // contact.onRefresh(function(contact) {});
      // contact.onConnected(function() {});
    });
  }

  reloadCurrentRoute() {
    window.location.reload();
}

  async saveContactDetails(): Promise<void> {
  this.spinnerLoader = true;
   await this.realtimeCommunications.updateDetails(
      this.contactId,
      this.customer.uuid,
      this.employee?.uuid || 0 
    ).toPromise()
    .then(() => {
      this.notification.showSuccessToast('USER_CREATED');
    })
    .catch((error) => {
      this.spinnerLoader = false;
      error = "GENERIC_ERROR"
      this.notification.showErrorToast(error);
    })
    .finally(() => this.spinnerLoader = false)
  }
}
