import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawerContainer, MatSidenavContainer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { LayoutService } from './layout.service';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements  AfterContentInit {
  @ViewChild('drawerContainer', { static: true }) drawerContainer!: MatDrawerContainer;
  @ViewChild('sideMenu', { static: true }) sideMenu!: MatSidenavContainer;
  
  openMenu = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      tap((isHandset) => {
        if (!isHandset) {
          this.sideMenu.open();
        } else {
          this.sideMenu.close();
        }
      }),
      shareReplay()
    );

  constructor(
    private layoutService: LayoutService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngAfterContentInit(): void {
    this.layoutService.sidenav = this.sideMenu;
    this.layoutService.drawerContainer = this.drawerContainer;

    this.isHandset$.subscribe((value) => {
      if (!value) {
        this.openMenu = true;
      }
    });
  }
}
