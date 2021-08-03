import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsResolver } from './resolvers/faqs.resolver'
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsComponent,
    resolve: {
      FaqsResolver: FaqsResolver
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrequentlyQuestionsRoutingModule { }
