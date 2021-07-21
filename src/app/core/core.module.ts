import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { TicketsService } from './services/tickets.service';
import { NavigationService } from './services/navigation.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    TicketsService,
    NavigationService
  ]
})
export class CoreModule { }
