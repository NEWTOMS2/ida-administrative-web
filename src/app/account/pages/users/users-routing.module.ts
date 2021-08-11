import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../guards/roles.guard';
import { UserResolver } from '../../resolvers/user.resolver';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [RolesGuard],

    resolve: {
      user: UserResolver,
      users: UsersResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
