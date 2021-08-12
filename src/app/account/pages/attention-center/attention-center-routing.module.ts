import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../../resolvers/user.resolver';
import { AwsConnectPanelComponent } from './aws-connect-panel/aws-connect-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AwsConnectPanelComponent,
    resolve: {
      user: UserResolver,
   },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionCenterRoutingModule { }
