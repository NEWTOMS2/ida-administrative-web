import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedRoutingModule } from './shared-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
