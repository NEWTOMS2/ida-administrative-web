import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';

import { LayoutService } from './layout/layout.service';
import { SharedModule } from '../shared/shared.module';
import { LocalizedDatePipe } from '../shared/pipes/localized.pipe';
import { UserResolver } from './resolvers/user.resolver';


@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopNavComponent,
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  providers: [
    LayoutService,
    UserResolver
  ]
})
export class AccountModule { }
