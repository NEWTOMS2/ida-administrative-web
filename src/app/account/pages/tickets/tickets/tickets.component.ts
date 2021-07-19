import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { TranslateService } from '@ngx-translate/core';

import { Ticket } from 'src/app/core/models/ticket.interface';
import { User } from 'src/app/core/models/user.interface';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  public title =  searchTranslation(this.translateService, 'ATTENTION_REQUESTS');
  public dataSource!: MatTableDataSource<Ticket>;
  public selection = new SelectionModel<Ticket>(true, []);
  public searchIcon = faSearch;
  public   displayedColumns = [
    'select',
    'id',
    'type',
    'user',
    'date',
    'state'
  ];
  private states = [
    {
      state:  searchTranslation(this.translateService,"NEW"),
      color: "secondary"
    },
    {
      state:  searchTranslation(this.translateService,"COMPLETED"),
      color: "primary"
    },
    {
      state:  searchTranslation(this.translateService,"IN_PROGRESS"),
      color: "info"
    }
  ]
  private user!: User;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.buildTable();
    this.user = {
      email: "michelle.alleyne@newtoms.com"
    }
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  private buildTable(): void {
    const tickets: Ticket[]= [
      {
        "id": "T-1212",
        "type": "envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService,"NEW"),
        "agent": "michelle.alleyne@newtoms.com"
      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService,"NEW"),
        "agent": "michelle.alleyne@newtoms.com"

      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService,"NEW"),
        "agent": "michelle.boniel@newtoms.com"
      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService,"NEW"),
        "agent": "michelle.boniel@newtoms.com"

      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService,"NEW"),
        "agent": "michelle.boniel@newtoms.com"
      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService, "IN_PROGRESS"),
        "agent": "michelle.alleyne@newtoms.com"

      },
      {
        "id": "T-1212",
        "type": "Problema de envío de SIM",
        "user": "alleynemichelle123@gmail.com",
        "date": "28 Abril del 2020",
        "state": searchTranslation(this.translateService, "COMPLETED"),
        "agent": "perez.alleyne@newtoms.com"
      }
    ]

    this.dataSource = new MatTableDataSource(tickets);
  }


  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  setStateBadgeClass(state: string): string {
    return (this.states.find((item)=> item.state == state)?.color || "") + "-badge"
  }

  setTableRowColor(index: number): string{
    let classColor = "";
    if (index % 2 == 0) classColor = 'table-row-item';
    else '';

    return classColor
  }


  applyFilter(filterValue: any): void {
    const value =  filterValue.value === null ? '' : filterValue.value;
    filterValue = value.trim();
    filterValue = value.toLowerCase();
    this.dataSource.filter = value;
  }

  filterAgentRequests(value: string): void {
    const filter = value == 'MY_REQUESTS' ? this.user.email : ''
    this.applyFilter({value: filter});
  }

}
