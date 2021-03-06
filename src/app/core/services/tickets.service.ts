import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';
import { Ticket } from '../models/ticket.interface';



@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(
    private http: HttpClient
  ) {}

  get(): Observable<Ticket[]>{
      return this.http.get(administrative_exp_api_host + '/claims', this.httpOptions)
      .pipe(
          map((data: any) => {
              return this.buildTicket(data.data) as Ticket[]
          })
      )
      .pipe(
        catchError(this.handleError)
      )
  }

  getById(id: number): Observable<Ticket>{
    return this.http.get(administrative_exp_api_host + '/claims', {
      ...this.httpOptions,
      params: { id }
    })
    .pipe(
        map((data: any) => {
            return this.buildTicket([(data.data as any[]).find((ticket) => ticket.id == id)])[0]
        })
    )
    .pipe(
      catchError(this.handleError)
    )
  }

  create(ticket: any):  Observable<any>{
    const tickets = []
    tickets.push(ticket)
    return this.http.post(administrative_exp_api_host + `/claims`, JSON.stringify(tickets), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    ) 
  }

  createStatus(status: any, ticketId: string): Observable<any>{
    return this.http.post(administrative_exp_api_host + `/claims/${ticketId}/states`, JSON.stringify(status), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )  
  }

  buildTicket(tickets: any[]): Ticket[]{
    return tickets.map((data) => {
       const ticket = {
        id: data.uuid,
        claimId: data.id,
        type: data.type,
        description: data.description,
        client: {
            uuid: data.client.uuid,
            id: data.client.id,
            name: data.client.name,
            lastname:  data.client.last_name,
            phoneNumber: data.client.phone_number,
            email: data.client.email,
            isMVNOClient:  data.client.isMVNOClient
        },
        employee: {
            name: data.employee.name,
            lastname:  data.employee.last_name,
            email: data.employee.email,
            uid: data.employee.id
        },
        states: data.states.map((state: any) => {
            const states = {
                id: state.id,
                claimUuid: state.claim_uuid,
                stateName: state.state_name,
                initialDate: state.initial_date,
                finalDate: state.final_date,
                description: state.description
            }

            return states;
        })
       }

       return ticket;
    })
  }

  handleError(error: any ) {
    return throwError(error.error.error[0].error_description);
 }
}
