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
import { TitleCasePipe } from '@angular/common';
export interface CommunicationTable {
  contact_id: string;
  client: string;
  agent: string;
  date: string;
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
  public title = searchTranslation(this.translateService, 'COMMUNICATION_ANALYSIS');
  public realTimeCommunications: RealTimeCommunication[] = [];
  public displayedColumns = [
    'id',
    'contact_id',
    'client',
    'agent',
    'date'
  ];

  constructor(
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private localizePipe: LocalizedDatePipe,
    private titleCasePipe: TitleCasePipe,
    private router: Router,
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

  private buildRealTimeCommunications(): void {
    this.activatedRoute.data.subscribe((data: Partial<{ realTimeCommunications: RealTimeCommunication[] }>) => {
      const content = data.realTimeCommunications != null ? data.realTimeCommunications : [];
      const newArr = content.map(obj => {
        return {...obj, dateSort: new Date(obj.date)};
      });
      newArr.sort((date1: any, date2:any) => date2.dateSort - date1.dateSort);
      newArr.forEach((element, index) => {
        const communication: RealTimeCommunication = { 
          id: index + 1, 
          contact_id: element.contact_id, 
          client: element.client, 
          agent: element.agent,
          date: this.titleCasePipe.transform(this.localizePipe.transform( new Date (element.date || ""), 'MMMM d, y, h:mm a')),
        }
        this.realTimeCommunications.push(communication);
      });
      this.dataSource = new MatTableDataSource(this.realTimeCommunications as RealTimeCommunication[]);
    });
  }

  applyFilter(filterValue: any): void {
    const value = filterValue.value === null ? '' : filterValue.value;
    filterValue = value.trim();
    filterValue = value.toLowerCase();
    this.dataSource.filter = value;
  }

  setTableRowColor(index: number): string {
    let classColor = "";
    if (index % 2 == 0) classColor = 'table-row-item';
    else '';

    return classColor
  }

  opentCommunicationDetail(communication: any): void {
    this.router.navigate([`/account/communication-analysis/${communication.contact_id}`]);
  }
}