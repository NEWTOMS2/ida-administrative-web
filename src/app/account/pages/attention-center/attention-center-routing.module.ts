import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsConnectPanelComponent } from './aws-connect-panel/aws-connect-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AwsConnectPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionCenterRoutingModule { }
