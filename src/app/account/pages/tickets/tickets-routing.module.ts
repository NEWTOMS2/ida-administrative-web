import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsResolver } from './resolvers/tickets.resolver';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    resolve: {
      tickets: TicketsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
