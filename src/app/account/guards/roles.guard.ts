import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { routes } from 'src/app/core/config/configuration';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const user = JSON.parse((this.authService.decrypt(localStorage.getItem('user') || "", environment.encryptKey)))
    const path = state.url.split('/')
    const nextRoute = path[path.length-1]
    let routesAllow = user.role == 'ADMIN' ?  routes.ADMIN : routes.AGENT
   
    if (!routesAllow.includes(nextRoute)){
      this.router.navigate(['/account']);
      return false;
    }
    return true;
   }  
  
}
