import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Faq } from 'src/app/core/models/faq.interface';
import { FaqService } from 'src/app/core/services/faq.service';

@Injectable()
export class FaqsResolver implements Resolve<Observable<Faq[]>> {
  constructor(
    private faqService: FaqService
  ) {}

  resolve(): Observable<Faq[]> {
    const faq$ = this.faqService.get();
    return faq$;
  }
}
