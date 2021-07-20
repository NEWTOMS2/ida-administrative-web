import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedUserGuard } from './guards/logged-user.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoggedUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
