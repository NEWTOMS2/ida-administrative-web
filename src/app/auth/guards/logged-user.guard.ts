import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserLogged(localStorage.getItem("Token")!).pipe(
      map((user) => (user.data.expired)),
      tap((isUserNotLogged) => {
        if (!isUserNotLogged) {
          this.router.navigate(['/']);
        }
      })
    );
  }  
}
