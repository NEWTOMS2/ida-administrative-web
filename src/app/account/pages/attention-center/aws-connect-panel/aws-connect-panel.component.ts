import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersService } from 'src/app/core/services/users.service';
import { Customer } from 'src/app/core/models/customer.interface';
import { aws_connect, images } from 'src/app/core/config/configuration';

import 'amazon-connect-streams';

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

  constructor(
      private translateService: TranslateService,
      private userService: UsersService,
    ) { }

  setEmptyCustomerInfo(): void {
    this.customer = {
      "email":"",
      "name": "",
      "lastname": "",
      "phoneNumber":""
    }
  }

  ngOnInit(): void {
    this.setEmptyCustomerInfo();
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
        var phone = JSON.stringify(attributeMap["phoneNumber"]["value"]).split('+')[1].split('"')[0];
        this.userService.getUserByPhoneNumber(phone).toPromise().then((user) => {
          this.setEmptyCustomerInfo();
          if (user){
            this.customer = {
              "email": user.email,
              "name": user.name,
              "lastname": user.last_name,
              "phoneNumber": "+" + user.phone_number
             }
          }else {
            this.customer.phoneNumber = "+" + phone
          }
        });
      });
      contact.onEnded(()=> {
        // this.setEmptyCustomerInfo();
      });

      // contact.onIncoming(function(contact) {});
      // contact.onRefresh(function(contact) {});
      // contact.onConnected(function() {});
    });
  }

  reloadCurrentRoute() {
    window.location.reload();
}
}
