import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttentionCenterRoutingModule } from './attention-center-routing.module';
import { AwsConnectPanelComponent } from './aws-connect-panel/aws-connect-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AwsConnectPanelComponent
  ],
  imports: [
    CommonModule,
    AttentionCenterRoutingModule,
    SharedModule
  ]
})
export class AttentionCenterModule { }
