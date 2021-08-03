import { Injectable } from '@angular/core';
import { Faq } from 'src/app/core/models/faq.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqAnswersService {
  currentFAQ: Faq | null = null;
  constructor() { }

}
