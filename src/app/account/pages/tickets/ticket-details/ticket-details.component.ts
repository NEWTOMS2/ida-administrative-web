import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalizedDatePipe } from 'src/app/shared/pipes/localized.pipe';
import { ticketStates } from 'src/app/core/config/configuration';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private localizePipe: LocalizedDatePipe,
    private formBuilder: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    this.state$.subscribe((data:  any) => {
      if (!data.states) this.router.navigate(['/account/tickets'])
      else {
        this.ticketStates = data.states?.map((state: any) => {
          return {
            description: state.description,
            initialDate: state.initialDate,
            state: state.stateName
          }
        })
        this.ticketCurrentStatus = data?.detail.currentStatus;
        this.ticketCurrentStatus.id = data?.detail.id;
        this.states = this.ticketStates;
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

  createNewStatus(): void {
    this.newTicketStatusForm.markAllAsTouched();
    console.log(this.newTicketStatusForm.value);
  }

  formatDate(date: Date): Date {
    return this.localizePipe.transform( new Date (date || ""), 'MMM d, y, h:mm a');
  }

}
