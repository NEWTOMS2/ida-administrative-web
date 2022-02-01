import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { LayoutService } from '../layout.service';
import { User } from 'src/app/core/models/user.interface';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public menuIcon = faBars;
  public logoutIcon = faSignOutAlt
  public isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result: any) => result.matches),
    shareReplay()
  );
  public userName!: string;
  private sideMenuVisible!: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data: Partial<{ user: User}>) => {
      this.userName = data.user?.name + " " + data.user?.lastname
    });
  }

  
  toggleSideMenu(): void {
    this.layoutService.sidenav.toggle().then(() => {
      this.sideMenuVisible = !this.sideMenuVisible;
    });
  }

  logOut(): void {
    this.layoutService.closeAwsConnectSession();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
