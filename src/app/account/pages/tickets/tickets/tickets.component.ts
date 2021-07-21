import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

import { ticketStates, ticketTypes } from 'src/app/core/config/configuration';

import { Ticket } from 'src/app/core/models/ticket.interface';
import { User } from 'src/app/core/models/user.interface';
import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { searchTranslation } from 'src/app/utils/searchTranslation';


export interface TableTicket {
  id: number;
  type: string;
  user:  string;
  date: string;
  state: string;
  agent: string;
  
}

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
  public dataSource!: MatTableDataSource<TableTicket>;
  public selection = new SelectionModel<TableTicket>(true, []);
  public searchIcon = faSearch;
  public ticketStates!: any[];
  public ticketTypes!: string[];
  public   displayedColumns = [
    'select',
    'id',
    'type',
    'agent',
    'user',
    'date',
    'state'
  ];
  private user!: User | undefined;

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private localizePipe: LocalizedDatePipe
    ) { }

  ngOnInit(): void {
    this.buildUser();
    this.buildSelectorData();
    this.buildTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private buildSelectorData(): void {
    this.ticketStates = ticketStates.map((state)=> {
      return {
        state:  searchTranslation(this.translateService,state.state),
        color: state.color
      }
    })

    this.ticketTypes = ticketTypes.map((type) => searchTranslation(this.translateService, type))
  }
  
  private buildTable(): void {

    this.activatedRoute.data.subscribe((data: Partial<{ tickets: Ticket[]}>) => {
      const content = data.tickets != null ? data.tickets : []
      let tickets = content.map((ticket) =>{
        const state = (ticket.states?.find((state) => state.finalDate == null || state.stateName == 'COMPLETED'))?.stateName
        const date =  (ticket.states?.find((state) => state.stateName == 'NEW'))?.initialDate
        
        return {
          id: ticket.id || 0,
          type: searchTranslation(this.translateService, ticket.type || ""),
          user: ticket.client?.email  || "",
          date:  this.localizePipe.transform( new Date (date || ""), 'MMMM d, y'),
          state: searchTranslation(this.translateService, state || ""),
          agent: ticket.employee?.email  || "",
        }
      })

      this.dataSource = new MatTableDataSource(tickets as TableTicket[]);
    });

  }

  private buildUser(): void{

    this.activatedRoute.data.subscribe((data: Partial<{ user: User}>) => {
      this.user = data.user
    });
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
    return (this.ticketStates.find((item: any)=> item.state == state)?.color || "") + "-badge"
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
    const filter = value == 'MY_REQUESTS' ? this.user?.email : ''
    this.applyFilter({value: filter});
  }
}
