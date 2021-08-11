import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketsResolver } from './resolvers/tickets.resolver';
import { UserResolver } from '../../resolvers/user.resolver';

import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { RolesGuard } from '../../guards/roles.guard';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule
  ],
  providers: [
    TicketsResolver,
    UserResolver,
    LocalizedDatePipe,
    DatePipe,
    TitleCasePipe,
    RolesGuard
  ]
})
export class TicketsModule { }
