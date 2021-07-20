import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedRoutingModule } from './shared-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';


@NgModule({
  declarations: [
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    FontAwesomeModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatSelectModule,
    PageWrapperComponent
  ]
})
export class SharedModule { }
