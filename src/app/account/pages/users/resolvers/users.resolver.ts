import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { UsersService } from 'src/app/core/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {
  constructor(
    private usersService: UsersService
  ) {}

  resolve(): Observable<User[]> {
    const users$ = this.usersService.get();
    return users$;
  }
}
