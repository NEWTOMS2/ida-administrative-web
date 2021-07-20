import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsTokenValidGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    return await this.authService.isUserLogged(localStorage.getItem('Token')!).then((user)=> {
      if (!user || user.data.expired) {
        this.router.navigate(['/']);
      }
      return true;
    })
   }  
}
