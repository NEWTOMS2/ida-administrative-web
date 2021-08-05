import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/core/models/user.interface';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { UsersCreationComponent } from '../users-creation/users-creation.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  public title = searchTranslation(this.translateService, 'USERS');
  public dataSource!: MatTableDataSource<User>;
  public displayedColumns = ['role', 'name','email', 'state'];
  public expandedElement!: User | null;
  public searchIcon = faSearch;

  users!: User[]

  constructor(
    private translateService: TranslateService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.getUsers();
    this.buildTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  updateUser(updatedUser: any): void {

    this.users = this.users.map((user)=> {
      if (  user.email != updatedUser.email) return user;
      else {
        return {
          id: user.id,
          name: updatedUser.name,
          lastname: updatedUser.last_name,
          phoneNumber: updatedUser.phone_number,
          email: updatedUser.email,
          country: updatedUser.country,
          city: updatedUser.city,
          address: updatedUser.detail_address,
          role: updatedUser.role,
          state: updatedUser.state
        } as User;
      }
    })

    this.refresh()
  }


  getUsers(): void {
    this.activatedRoute.data.subscribe((data: Partial<{ users: User[]}>) => {
      this.users = data.users || []
    });
  }

  openUserCreationModal(): void {
    this.dialog.open(UsersCreationComponent, {
      width: '700px',
      autoFocus: false
    });
  }

    
  applyFilter(filterValue: any): void {
    const value =  filterValue.value === null ? '' : filterValue.value;
    filterValue = value.trim();
    filterValue = value.toLowerCase();
    this.dataSource.filter = value;
  }

  setTableRowColor(index: number): string{
    let classColor = "";
    if (index % 2 == 0) classColor = 'table-row-item';
    else '';
    return classColor
  }

  private buildTable(): void {
    this.dataSource = new MatTableDataSource(this.users as User[]);
  }

  
  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private refresh(): void {
    this.buildTable();
    this.table.renderRows();
    this.initDataTable();
  }
}
