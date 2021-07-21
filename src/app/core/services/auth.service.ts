import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import CryptoES from 'crypto-es';

import { administrative_exp_api_host, auth_api_host } from '../config/configuration';
import { User } from '../models/user.interface';
import { environment } from 'src/environments/environment';

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
      const userData: User = {
        name: user.user.name,
        lastname: user.user.lastname,
        phoneNumber: user.user.phone_number,
        email:  user.user.email
      }

      localStorage.setItem('user', this.crypto(JSON.stringify(userData), environment.encryptKey));
      localStorage.setItem('Token', this.crypto(user.token, environment.encryptKey));
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


 crypto(value: any, key: string): string{
  return CryptoES.AES.encrypt(value, key).toString();
 }

 decrypt(value: string, key: string): string {
   const decryptedData = CryptoES.AES.decrypt(value, key);
   try {
     return decryptedData.toString(CryptoES.enc.Utf8);
   } catch {
     return "";
   }
 }

}
