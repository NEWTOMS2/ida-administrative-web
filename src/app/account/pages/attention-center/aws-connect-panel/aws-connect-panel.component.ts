import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersService } from 'src/app/core/services/users.service';
import 'amazon-connect-streams';
import { Customer } from '../../../../core/models/customer.interface';

@Component({
  selector: 'app-aws-connect-panel',
  templateUrl: './aws-connect-panel.component.html',
  styleUrls: ['./aws-connect-panel.component.scss']
})
export class AwsConnectPanelComponent implements OnInit {
  public title =  searchTranslation(this.translateService, 'ATTENTION_REQUESTS');
  public customer!: Customer;

  constructor(
      private translateService: TranslateService,
      private userService: UsersService
    ) { }

  ngOnInit(): void {
  }

  setUserData(): void {

  }

  @ViewChild('ccpDiv')
  public ccpDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.initAwsCcp();
  }

  initAwsCcp(): void {
    const ccpUrl = 'https://newtoms.my.connect.aws/ccp-v2';
    connect.core.initCCP(this.ccpDiv.nativeElement, {
      ccpUrl,
     // loginPopup: true,
      loginUrl: 'https://newtoms.my.connect.aws',
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
      region: "us-east-1",        
    });

    connect.contact((contact) => {
      contact.onAccepted((contact) => {
        var attributeMap: any = contact.getAttributes();
        var phone = JSON.stringify(attributeMap["phoneNumber"]["value"]);
        this.userService.getUserByPhoneNumber(phone.split('+')[1].split('"')[0]).toPromise().then((data) => {
          console.log(data);
        });
      });
      
      // contact.onIncoming(function(contact) {});

      // contact.onRefresh(function(contact) {
      // });

      // contact.onEnded(function() {
      // });

      // contact.onConnected(function() {
      // });
    });
  }
}
