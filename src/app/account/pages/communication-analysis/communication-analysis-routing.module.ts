import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../guards/roles.guard';
import { CommunicationsComponent } from './communications/communications.component';
import { CommunicationDetailComponent } from './communication-detail/communication-detail.component'
import { RealTimeCommunicationsResolver } from './resolvers/real-time-communications.resolver';
import { CommunicationDetailResolver } from './resolvers/communication-detail.resolver';

const routes: Routes = [{
  path: '',
  canActivate:[RolesGuard],
  children: [
    {
      path: '',
      redirectTo: '/account/communication-analysis',
      pathMatch: 'full',
    },
    {
      path: '',
      component: CommunicationsComponent,
      resolve: {
        realTimeCommunications: RealTimeCommunicationsResolver,
      },
    },
    {
      path: ':contactId',
      component: CommunicationDetailComponent,
      resolve: {
        communicationDetail: CommunicationDetailResolver,
     },
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationAnalysisRoutingModule { }
