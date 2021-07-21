import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsTokenValidGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const token = this.authService.decrypt(localStorage.getItem('Token') || "", environment.encryptKey)
    return await this.authService.isUserLogged(token!).then((user)=> {
      if (!user || user.data.expired) {
        this.router.navigate(['/']);
      }
      return true;
    })
   }  
}
