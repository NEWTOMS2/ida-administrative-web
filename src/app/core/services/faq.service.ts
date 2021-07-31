import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';
import { Answer, Faq } from 'src/app/core/models/faq.interface';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  get(queryParam?: string): Observable<Faq[]> {
    return this.http
      .get(administrative_exp_api_host + `/faqs${queryParam ? queryParam : ""}`, this.httpOptions)
      .pipe(
        map((data: any) => {
          return this.buildFaq(data.data) as Faq[];
        })
      )
      .pipe(catchError(this.handleError));
  }

  buildFaq(faqs: any[]): any {
    return faqs.map((faq: Faq) => {
      const faqObject = {
        id: faq.id,
        type: faq.type.name,
        intent_name: faq.intent_name,
        dw_intent: faq.dw_intent,
        question: faq.question,
        intent_type: faq.intent_type,
        answers: faq.answers.map((fa) => {
          return {
            answer: fa.answer,
            intent: fa.intent,
            id: fa.id,
          };
        }),
      };
      return faqObject;
    });
  }

  updateFaqAnswer(answer: Answer): Observable<boolean> {
    return this.http
      .patch(
        administrative_exp_api_host +
          `/faqs/${answer.intent}/answers/${answer.id}`,
        {
          answer: answer.answer,
          faq_name: answer.intent,
        },
        this.httpOptions
      )
      .pipe(
        map((data: any) => {
          return true
        })
      )
      .pipe(catchError(this.handleError));
  }


  udpateFaqType(intent: string, type: string): Observable<boolean> {

    return this.http
      .patch(
        administrative_exp_api_host + `/faqs/${intent}`, { type }, this.httpOptions
      )
      .pipe(
        map((data: any) => {
          return true
        })
      )
      .pipe(catchError(this.handleError));
  }

  createAnswer(answers: any, intent: string): Observable<any>{
    return this.http.post(administrative_exp_api_host + `/faqs/${intent}/answers`, JSON.stringify(answers), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    console.log(error);
    return throwError(error.error.error[0].error_description);
  }
}
