import { AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { searchTranslation } from 'src/app/utils/searchTranslation';
import { faqTypes } from 'src/app/core/config/configuration';
import { Faq } from 'src/app/core/models/faq.interface';
import { FaqAnswersService } from '../services/faq-answers.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FaqsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  public title =  searchTranslation(this.translateService, 'FREQUENTLY_QUESTIONS');
  public dataSource!: MatTableDataSource<Faq>;
  public faqTypes = faqTypes;
  public displayedColumns = ['intent_name', 'question'];
  public searchIcon = faSearch;
  public expandedElement!: Faq | null;
  public faqForm!: FormGroup;


  get actions(): TemplateRef<any> {
    return this.itemTmpl;
  }
  
  public itemTmpl!: TemplateRef<any>;
  
  @Input() itemTemplate: any
  set actions(value: TemplateRef<any>) {
    this.itemTmpl= value;
  }
  
  @ContentChild(TemplateRef)
  set viewActions(value: TemplateRef<any>) {
    if (!this.itemTmpl && value) {
      this.itemTmpl = value;
    }
  }


  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private faqAnswersService: FaqAnswersService
    ) { }

  ngOnInit(): void {
    this.buildTable();
  }

  ngAfterViewInit(): void {
    this.initDataTable();
  }

  private initDataTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  


  applyFilter(filterValue: any): void {
    const value =  filterValue.value === null ? '' : filterValue.value;
    filterValue = value.trim();
    filterValue = value.toLowerCase();
    this.dataSource.filter = value;
  }


  applyTypeFilter(filterValue: any): void {
    const value =  filterValue.value === null ? '' : filterValue.value;
    filterValue = value.trim();
    filterValue = value.toLowerCase();
    this.dataSource.filter = value;
  }

  private buildTable(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      let faqs = data.FaqsResolver.map((faq: any) => {
        return {
          id: faq.id,
          type: faq.type,
          intent_name: faq.intent_name,
          dw_intent: faq.dw_intent,
          question: faq.question,
          answers: faq.answers
        }
      })

      console.log(faqs)
      this.dataSource = new MatTableDataSource(faqs);
    });
  }

  
  setTableRowColor(index: number): string{
    let classColor = "";
    if (index % 2 == 0) classColor = 'table-row-item';
    else '';
    return classColor
  }

}
