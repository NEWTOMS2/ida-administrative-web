import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MvnoInformationRoutingModule } from './mvno-information-routing.module';
import { PhonePlansComponent } from './phone-plans/phone-plans/phone-plans.component';
import { PhonePlanDetailsComponent } from './phone-plans/phone-plan-details/phone-plan-details.component';
import { PhonePlanCreationComponent } from './phone-plans/phone-plan-creation/phone-plan-creation.component';


@NgModule({
  declarations: [
    PhonePlansComponent,
    PhonePlanDetailsComponent,
    PhonePlanCreationComponent
  ],
  imports: [
    CommonModule,
    MvnoInformationRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class MvnoInformationModule { }
