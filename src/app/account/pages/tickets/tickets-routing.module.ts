import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../guards/roles.guard';
import { UserResolver } from '../../resolvers/user.resolver';
import { TicketsResolver } from './resolvers/tickets.resolver';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    canActivate: [RolesGuard],
    resolve: {
      user: UserResolver,
      tickets: TicketsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
