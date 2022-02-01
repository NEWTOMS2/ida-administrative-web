import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LayoutService {
  sidenav: any;
  drawerContainer: any;

  private logOutSubject = new Subject<boolean>();
  logOutObservable = this.logOutSubject.asObservable();

  closeAwsConnectSession(): void {
    this.logOutSubject.next(true);
  }
}
