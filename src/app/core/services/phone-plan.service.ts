import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';
import { PhonePlan } from '../models/phone-plans.interface';

@Injectable({
  providedIn: 'root',
})
export class PhonePlanService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }  

  constructor(
    private http: HttpClient
  ) {}

  create(phonePlan: PhonePlan): Observable<any> {
    return this.http.post(administrative_exp_api_host + '/phone-plans', [phonePlan], this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  update(phonePlan: PhonePlan, phonePlanId: number): Observable<any>{
    return this.http.patch(administrative_exp_api_host + `/phone-plans/${phonePlanId}`, phonePlan, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

   get(): Observable<any> {
    return this.http.get(administrative_exp_api_host + '/phone-plans', this.httpOptions)
    .pipe(
      map((data: any) => {
          console.log(data.data);
          return data.data as PhonePlan[]
      })
    )
    .pipe(
        catchError(this.handleError)
    )
   }

  handleError(error: any ) {
    return throwError(error.error.error[0].error_message);
 }

}
