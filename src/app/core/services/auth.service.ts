import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

import { administrative_exp_api_host, auth_api_host } from '../config/configuration';
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

  storeUserData(user: any): void {
      localStorage.setItem('Name', user.user.name);
      localStorage.setItem('Lastname', user.user.lastname);
      localStorage.setItem('Email', user.user.email);
      localStorage.setItem('PhoneNumber', user.user.phone_number);
      localStorage.setItem('Token', user.token);
      localStorage.setItem('Role', user.role);
  }

  async isUserLogged(token: string): Promise<any> {
    const user = await this.http.get<any>(auth_api_host + '/validate-token', {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
      })
    }).toPromise().catch(()=> {
      return null
    })
    return user;
  }

  handleError(error: any ) {
    console.log(error);
    return throwError(error.error.error[0].error_description);
 }
}
