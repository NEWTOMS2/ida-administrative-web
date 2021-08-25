import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AttentionCenterRoutingModule } from './attention-center-routing.module';
import { AwsConnectPanelComponent } from './aws-connect-panel/aws-connect-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserResolver } from '../../resolvers/user.resolver';
import { RegisterClaimDialogComponent } from './aws-connect-panel/register-claim-dialog/register-claim-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterCustomerComponent } from './aws-connect-panel/register-customer/register-customer.component';

@NgModule({
  declarations: [
    AwsConnectPanelComponent,
    RegisterClaimDialogComponent,
    RegisterCustomerComponent
  ],
  imports: [
    CommonModule,
    AttentionCenterRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [
    UserResolver
  ]
})
export class AttentionCenterModule { }
