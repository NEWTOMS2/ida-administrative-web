import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from './guards/roles.guard';

import { LayoutComponent } from './layout/layout.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: { user: UserResolver },
    children: [
      {
        path: '',
        redirectTo: '/account/attention',
        pathMatch: 'full',

      },
      {
        path: 'attention',
        loadChildren: () =>
          import('./pages/attention-center/attention-center.module').then(
            (m) => m.AttentionCenterModule
          ),
      },
      {
        path: 'frequently-questions',

        loadChildren: () =>
          import('./pages/frequently-questions/frequently-questions.module').then(
            (m) => m.FrequentlyQuestionsModule
          ),
      },
      {
        path: 'tickets',

        loadChildren: () =>
          import('./pages/tickets/tickets.module').then(
            (m) => m.TicketsModule
          ),
      },
      {
        path: 'mvno-information',

        loadChildren: () =>
          import('./pages/mvno-information/mvno-information.module').then(
            (m) => m.MvnoInformationModule
          ),
      },
      {
        path: 'users',

        loadChildren: () =>
          import('./pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
