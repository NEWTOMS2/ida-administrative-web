import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';


@Injectable({
  providedIn: 'root'
})
export class RealtimeCommunicationsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(
    private http: HttpClient

  ) { }


  updateDetails(contactId: string, userId: number, employeeId: number): Observable<Boolean>{
    return this.http.patch(administrative_exp_api_host + '/realtime-communication',{
      contact_id: contactId,
      user_uuid: userId,
      employee_uuid: employeeId
    }, this.httpOptions)
    .pipe(
        map(() => true)
    )
    .pipe(
      catchError(this.handleError)
    )
    
}

handleError(error: any ) {
  return throwError(error.error.error[0].error_description);
}
}
