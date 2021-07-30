import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../guards/roles.guard';
import { UserResolver } from '../../resolvers/user.resolver';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [RolesGuard],

    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
