import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../../resolvers/user.resolver';
import { TicketsResolver } from './resolvers/tickets.resolver';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [{
  path: '',
  resolve: {
    user: UserResolver,
 },
  children: [
    {
      path: '',
      redirectTo: '/account/tickets',
      pathMatch: 'full',
    },
    {
      path: '',
      component: TicketsComponent,
      resolve: {
        tickets: TicketsResolver,
     },
    },
    {
      path: 'details',
      component: TicketDetailsComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
