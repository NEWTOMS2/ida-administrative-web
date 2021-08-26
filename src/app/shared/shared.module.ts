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
import { MatDialogModule } from '@angular/material/dialog';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    FontAwesomeModule,
    TextFieldModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatSelectModule,
    PageWrapperComponent,
    TextFieldModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
