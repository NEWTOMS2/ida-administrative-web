import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { administrative_exp_api_host, customer_exp_api_host } from '../config/configuration';
import { User } from '../models/user.interface';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';

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
    private authService: AuthService,
    private translateService: TranslateService
  ) { }

  create(user: User): Observable<any> {
    return this.http.post(administrative_exp_api_host + '/users', [user], this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  getUserByPhoneNumber(phoneNumber: string): Observable<any> {
    return this.http.get(administrative_exp_api_host + `/users/clients?phone_number=${phoneNumber}`, this.httpOptions)
      .pipe(
        map((data: any) => {
          return data.data[0]
        })
      )
      .pipe(
        catchError(this.handleError)
      )
  }

  update(user: User, userId: number): Observable<any> {
    return this.http.patch(administrative_exp_api_host + `/users/${userId}`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  get(): Observable<User[]> {
    return this.http.get(administrative_exp_api_host + '/users', this.httpOptions)
      .pipe(
        map((data: any) => {
          return this.buildUser(data.data) as User[]
        })
      )
      .pipe(
        catchError(this.handleError)
      )
  }

  buildUser(users: any[]): User[] {
    return users.map((u) => {
      return {
        uuid: u.uuid,
        id: u.id,
        name: u.name,
        lastname: u.last_name,
        email: u.email,
        phoneNumber: u.phone_number,
        country: (u.address.find((address: any) => address.type == 'COUNTRY'))?.name,
        city: (u.address.find((address: any) => address.type == 'STATE'))?.name,
        address: u.detail_address,
        role: searchTranslation(this.translateService, (u.role.name.toUpperCase())),
        state: (u.is_active) ? searchTranslation(this.translateService, 'ACTIVE') : searchTranslation(this.translateService, 'INACTIVE'),
      }
    })
  }

  createCustomer(requestUser: any): Observable<any> {
  return this.http.post<User>(customer_exp_api_host + '/signup', JSON.stringify(requestUser), this.httpOptions)
  .pipe(
    catchError(this.handleError)
  )
  }

  handleError(error: any) {
    return throwError(error.error.error[0].error_message);
  }

}
