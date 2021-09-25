import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { ticketStates } from 'src/app/core/config/configuration';
import { TicketsService } from 'src/app/core/services/tickets.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  state$!: Observable<object>;
  title = ""
  ticketStatesConstant = ticketStates;
  ticketDetails:any = {};
  ticketStates: any [] = []
  states: any [] = [];
  detailsList!: any[];
  ticketCurrentStatus!: any;
  newTicketStatusForm!: FormGroup;
  spinnerLoader = false;
  paginatorIndex = 0; 
  paginatedStates!: any [];
  user!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private localizePipe: LocalizedDatePipe,
    private formBuilder: FormBuilder,
    private ticketService: TicketsService,
    private notification: NotificationsService,

  ) { 
  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history?.state))
    this.state$.subscribe((data:  any) => {
      if (!data.states) this.router.navigate(['/account/tickets'])
      else {
        this.ticketStates = this.setStates(data.states || [])
        this.ticketCurrentStatus = data?.detail.currentStatus;
        this.ticketCurrentStatus.id = data?.detail.id;
        this.ticketCurrentStatus.uuid = data?.detail.uuid;
        this.states = this.ticketStates;
        this.setPaginatedStates();
        this.ticketDetails = {
          client: data?.detail.name + " " + data?.detail.lastname,
          phoneNumber: data?.detail.phoneNumber,
          email: data?.detail.client,
          type: data?.detail.type,
          agent: data?.detail.agent,
        }
      }
      this.buildForm()
    })

    this.buildUser()
  }

  private buildUser(): void{

    this.activatedRoute.data.subscribe((data: Partial<{ user: User}>) => {
      this.user = data.user
    });
  }

  buildForm(): void{
    this.detailsList = Object.entries(this.ticketDetails);
    this.newTicketStatusForm = this.formBuilder.group({
      claim_id: [this.ticketCurrentStatus.id],
      state: ['', Validators.compose([Validators.required])],
      send_notification: [true],
      description: ['']
    });
  }

  showAdminPanel(): boolean {
    return this.ticketDetails.agent == this.user.email ? true : false
  }
  
  resetForm(controls: string[]): void {
    controls.forEach((control) => {
      this.newTicketStatusForm.get(control)?.reset('');
    });
  }


  createNewStatus(): void {
    this.newTicketStatusForm.markAllAsTouched();
    if(this.newTicketStatusForm.valid){
      this.spinnerLoader = true;
      const id = this.newTicketStatusForm.value.claim_id;
      this.ticketService.createStatus(this.newTicketStatusForm.value, id).toPromise()
      .then(async () => {
        const ticket = await this.ticketService.getById(id).toPromise();
        this.states = this.setStates(ticket.states || [])
        this.setPaginatedStates();
        this.resetForm(['state', 'description'])
        this.spinnerLoader = false;
        this.notification.showSuccessToast('CLAIM_STATE_CREATED');
      })
      .catch(() => {
        this.spinnerLoader = false;
        this.notification.showErrorToast('GENERIC_ERROR');
      });
    }
  }
  

  setStates(statesList: any[]): any [] {
    return  this.sortListByDate((statesList.map((state: any) => {
      return {
        description: state.description,
        initialDate: state.initialDate,
        state: state.stateName
      }
    }) || []  ))
  }

  
  sortListByDate(statesList: any[]): any [ ] {
    return statesList.sort((a,b) => new Date(b.initialDate) as any - (new Date(a.initialDate) as any))
  }

  formatDate(date: Date): Date {
    return this.localizePipe.transform( new Date (date || ""), 'MMM d, y, h:mm a');
  }

  updatePaginator(action: number): void {
    let makeAction = false;
    if (action == -1 && (this.paginatorIndex > 0)){
      makeAction = true;
    } 
    else if( action == 1 && ((this.paginatorIndex * 4) + 4) < this.states.length){
      makeAction = true;
    }

    if (makeAction)  {
      this.paginatorIndex = this.paginatorIndex + action;
      this.setPaginatedStates();
    }
  }


  setPaginatedStates(): void {
    this.paginatedStates = this.states.slice((this.paginatorIndex * 4), (this.paginatorIndex * 4) + 4 )
  }
}
