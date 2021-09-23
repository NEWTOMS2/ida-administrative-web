import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { RealTimeCommunication } from 'src/app/core/models/real-time-communication.interface';

export interface CommunicationTable {
  contact_id: string;
  client: string;
  agent: string;
}

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  public dataSource!: MatTableDataSource<CommunicationTable>;
  public searchIcon = faSearch;
  public title =  searchTranslation(this.translateService, 'COMMUNICATION_ANALYSIS');
  public realTimeCommunications!: RealTimeCommunication[];
  public   displayedColumns = [
    'contact_id',
    'client',
    'agent'
  ];

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private localizePipe: LocalizedDatePipe,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildRealTimeCommunications();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private buildRealTimeCommunications(): void{
    this.activatedRoute.data.subscribe((data: Partial<{ realTimeCommunications: RealTimeCommunication[]}>) => {
      const content = data.realTimeCommunications != null ? data.realTimeCommunications : []
      this.realTimeCommunications = content;
      this.dataSource = new MatTableDataSource(content as RealTimeCommunication[]);
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

  opentCommunicationDetail(communication: any): void {
    this.router.navigate([`/account/communication-analysis/${communication.contact_id}`]);
  }
}