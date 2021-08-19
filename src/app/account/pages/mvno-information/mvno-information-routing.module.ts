import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../../guards/roles.guard';
import { PhonePlanResolver } from './resolvers/phone-plan.resolver';
import { PhonePlansComponent } from './phone-plans/phone-plans/phone-plans.component';

const routes: Routes = [
  {
    path: '',
    component: PhonePlansComponent,
    canActivate: [RolesGuard],

    resolve: {
      phonePlans: PhonePlanResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvnoInformationRoutingModule { }
