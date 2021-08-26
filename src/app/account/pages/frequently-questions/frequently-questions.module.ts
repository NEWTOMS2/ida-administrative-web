import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FrequentlyQuestionsRoutingModule } from './frequently-questions-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqsResolver } from './resolvers/faqs.resolver';
import { FaqDetailsComponent } from './faq-details/faq-details.component';


@NgModule({
  declarations: [
    FaqsComponent,
    FaqDetailsComponent,
  ],
  imports: [
    CommonModule,
    FrequentlyQuestionsRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FaqsResolver
  ]
})
export class FrequentlyQuestionsModule { }
