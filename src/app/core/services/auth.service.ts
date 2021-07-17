import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(
    private http: HttpClient
  ) {}

  login(credentials: User): Observable<any> {
    return this.http.post<User>(administrative_exp_api_host + '/login', JSON.stringify(credentials), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  logout(): void {
    localStorage.clear();
  }

  isUserLogged(): Observable<any> {
    return this.http.get<any>(administrative_exp_api_host + '/validate-token')
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: any ) {
    console.log(error);
    return throwError(error.error.error[0].error_description);
 }
}
