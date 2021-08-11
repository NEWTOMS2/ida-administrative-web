import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { UsersComponent } from './users/users.component';
import { UserResolver } from '../../resolvers/user.resolver';
import { UsersCreationComponent } from './users-creation/users-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RolesGuard } from '../../guards/roles.guard';


@NgModule({
  declarations: [
    UsersComponent,
    UsersCreationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [
    UserResolver,
    RolesGuard
  ]
})
export class UsersModule { }
