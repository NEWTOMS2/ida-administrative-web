import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host } from '../config/configuration';
import { User } from '../models/user.interface';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class UsersService {
  token = this.authService.decrypt(localStorage.getItem('Token') || "", environment.encryptKey)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`

    })
  }  

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  create(user: User): Observable<any> {
      console.log(user)
    return this.http.post(administrative_exp_api_host + '/users', [user], this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  getUserByPhoneNumber(phoneNumber: string):  Observable<any> {
      console.log("ssssss", phoneNumber);
        return this.http.get(administrative_exp_api_host + `/users/clients?phone_number=${phoneNumber}`, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        )
   }

  handleError(error: any ) {
    console.log(error);
    return throwError(error.error.error[0].error_description);
 }

}
