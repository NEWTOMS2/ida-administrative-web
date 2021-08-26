import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { PhonePlan } from 'src/app/core/models/phone-plans.interface';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { PhonePlanCreationComponent } from '../phone-plan-creation/phone-plan-creation.component'
import { phonePlanTypes } from 'src/app/core/config/configuration';
import { PhonePlanService } from 'src/app/core/services/phone-plan.service';

@Component({
  selector: 'app-phone-plans',
  templateUrl: './phone-plans.component.html',
  styleUrls: ['./phone-plans.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PhonePlansComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  public title = searchTranslation(this.translateService, 'PHONE_PLANS');
  public dataSource!: MatTableDataSource<PhonePlan>;
  public displayedColumns = ['name', 'minutes','sms', 'mb', 'type'];
  public expandedElement!: PhonePlan | null;
  public searchIcon = faSearch;
  public phonePlanTypes = phonePlanTypes;

  phonePlans!: PhonePlan[]

  constructor(    
    private translateService: TranslateService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private phonePlanService: PhonePlanService) {
      this.phonePlanService.userCreatedObservable.subscribe(() => {
        this.reloadPhonePlans();
      })
     }

  ngOnInit(): void {    
    this.getPhonePlans();
    this.buildTable();
  }

  ngAfterViewInit(): void {
   this.initDataTable();
  }

  getPhonePlans(): void {
    this.activatedRoute.data.subscribe((data: Partial<{ phonePlans: PhonePlan[]}>) => {
      this.phonePlans = data.phonePlans || []
    });
  }

  openUserCreationModal(): void {
    this.dialog.open(PhonePlanCreationComponent, {
      width: '700px',
      autoFocus: false
    });
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

  updatePhonePlan(updatedPhonePlan: any): void {

    this.phonePlans = this.phonePlans.map((phonePlan)=> {
      if (  phonePlan.id != updatedPhonePlan.id) return phonePlan;
      else {
        return {
          id: phonePlan.id,
          name: updatedPhonePlan.name,
          description: updatedPhonePlan.description,
          minutes: updatedPhonePlan.minutes,
          sms: updatedPhonePlan.sms,
          mb: updatedPhonePlan.mb,
          price: updatedPhonePlan.price,
          duration: updatedPhonePlan.duration
        } as PhonePlan;
      }
    })

    this.refresh()
  }

  reloadPhonePlans(): void {
    this.phonePlanService.get().subscribe((data)=> {
      this.phonePlans = data;
      this.refresh();
    });
  }

  private buildTable(): void {
    this.dataSource = new MatTableDataSource(this.phonePlans as PhonePlan[]);
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
