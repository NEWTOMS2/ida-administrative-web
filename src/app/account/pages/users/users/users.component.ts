import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersCreationComponent } from '../users-creation/users-creation.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public title = searchTranslation(this.translateService, 'USERS');

  constructor(
    private translateService: TranslateService,
    private dialog: MatDialog,

    ) { }

  ngOnInit(): void {
  }

  openUserCreationModal(): void {
    this.dialog.open(UsersCreationComponent, {
      width: '700px',
      autoFocus: false
    });
  }

}
