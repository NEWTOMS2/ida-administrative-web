import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserResolver
  implements Resolve<Observable<User | null>> {
  constructor(
    private authService: AuthService
  ) {}

  resolve(): Observable<User | null> {
    const foundData = this.authService.decrypt(localStorage.getItem('user') || "", environment.encryptKey)
    let userData$: Observable<User | null> = foundData ? of(JSON.parse(foundData)) : of(null)

    return userData$ || null;
  }
}
