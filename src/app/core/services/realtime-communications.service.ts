import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { RealTimeCommunication, CommunicationDetail } from 'src/app/core/models/real-time-communication.interface';

import { administrative_exp_api_host } from '../config/configuration';
import { CommunicationTable } from 'src/app/account/pages/communication-analysis/communications/communications.component';


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

  getCommunications(): Observable<RealTimeCommunication[]> {
    return this.http.get(administrative_exp_api_host + '/realtime-communication', this.httpOptions)
    .pipe(
        map((data: any) => data.data as RealTimeCommunication[])
    )
    .pipe(
      catchError(this.handleError)
    )
  }

  getCommunicationDetail(contactId: string): Observable<CommunicationDetail> {
    return this.http.get(administrative_exp_api_host + `/realtime-communication/${contactId}`, this.httpOptions)
    .pipe(
        map((data: any) => data.data[0] as CommunicationDetail)
    )
    .pipe(
      catchError(this.handleError)
    )
  }

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
