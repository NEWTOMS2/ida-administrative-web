import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
  private allTickets!: any[];
  private state$!: Observable<object>;
  public   displayedColumns = [
    'id',
    'type',
    'agent',
    'user',
    'date',
    'state'
  ];
  private user!: User | undefined;
  public filterAgentClaims = false;

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private localizePipe: LocalizedDatePipe,
    private router: Router
    ) { }


  
  ngOnInit(): void {
    this.buildUser();
    this.buildSelectorData();
    this.buildTable();
    this.filterByUser();
    if (!this.userIsAdmin()) {
      this.filterAgentRequests('MY_REQUESTS');
    }
  }

  ngAfterViewInit(): void {
    this.initDataTable()
  }

  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private buildSelectorData(): void {
    this.ticketStates = ticketStates.map((state)=> {
      return {
        state:  searchTranslation(this.translateService,state.state || ""),
        color: state.color
      }
    })

    this.ticketTypes = ticketTypes.map((type) => searchTranslation(this.translateService, type || ""))
  }
  
  private buildTable(): void {

    this.activatedRoute.data.subscribe((data: Partial<{ tickets: Ticket[]}>) => {
      const content = data.tickets != null ? data.tickets : []

      this.allTickets = content;

      let tickets = content.map((ticket) =>{
        const currentStatus = this.getCurrentTicketStatus(ticket);

        return {
          id: ticket.id || 0,
          type: searchTranslation(this.translateService, ticket.type || ""),
          user: ticket.client?.email  || "",
          date:  this.localizePipe.transform( new Date (currentStatus.date || ""), 'MMMM d, y'),
          state: searchTranslation(this.translateService, currentStatus.state || ""),
          agent: ticket.employee?.email  || "",
        }
      })
      tickets.sort((a: any, b:any) => {return (b.id - a.id)})
      this.dataSource = new MatTableDataSource(tickets as TableTicket[]);
    });
  }

  private buildUser(): void{
    this.activatedRoute.data.subscribe((data: Partial<{ user: User}>) => {
      this.user = data.user
    });
  }

  private filterByUser():void{
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history?.state))
    this.state$.subscribe((data:  any) => {
      if(data.userToFilter) this.applyFilter({value: data.userToFilter});
    })
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
    if (this.filterAgentClaims) {
      this.dataSource.filterPredicate = (data: TableTicket, filter: string):  boolean => {
        const dataStr = this.defaultFilter(data);
        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return (dataStr.indexOf(transformedFilter) != -1) && data.agent == this.user?.email;
      } 
    }
    else {
      this.dataSource.filterPredicate = (data: TableTicket, filter: string):  boolean => {
        const dataStr = this.defaultFilter(data);
        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return dataStr.indexOf(transformedFilter) != -1;
       }
    }
    this.dataSource.filter = value;
  }

  defaultFilter(data: TableTicket): string {
    return Object.keys(data).reduce((currentTerm: string, key: string) => {
      return (currentTerm + (data as { [key: string]: any })[key] + '???');
    }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  filterAgentRequests(value: string): void {
    const filter = value == 'MY_REQUESTS' ? this.user?.email : ''
    this.filterAgentClaims = value == 'MY_REQUESTS' ? true : false;
    this.applyFilter({value: filter});
  }

  getCurrentTicketStatus(ticket: any): any {
    return {
      state: (ticket.states?.find((state: any) => state.finalDate == null || state.stateName == 'COMPLETED'))?.stateName,
      date: (ticket.states?.find((state: any) => state.stateName == 'NEW'))?.initialDate
    }
  }

  seeTicket(selectedTicket: Ticket): void{
    const ticket = this.allTickets.filter((ticket) => ticket.id == selectedTicket.id)[0]
    const currentStatus = this.getCurrentTicketStatus(ticket);
    this.router.navigateByUrl('/account/tickets/details', { state: {
      detail: {
        id: ticket.claimId,
        uuid: ticket.id,
        client: ticket.client.email,
        lastname: ticket.client.lastname,
        name: ticket.client.name,
        phoneNumber: ticket.client.phoneNumber,
        description: ticket.description,
        agent: ticket.employee.email,
        type: ticket.type,
        currentStatus
      },
      states: ticket.states
    } });  }

    userIsAdmin(): boolean {
      return (this.user?.role || "") == 'ADMIN'
    }
}
