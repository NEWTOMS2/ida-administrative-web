import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FrequentlyQuestionsRoutingModule } from './frequently-questions-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqsResolver } from './resolvers/faqs.resolver';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FrequentlyQuestionsRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [
    FaqsResolver
  ]
})
export class FrequentlyQuestionsModule { }
