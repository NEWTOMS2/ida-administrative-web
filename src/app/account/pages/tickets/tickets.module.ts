import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketsResolver } from './resolvers/tickets.resolver';
import { UserResolver } from '../../resolvers/user.resolver';

import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { RolesGuard } from '../../guards/roles.guard';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
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
