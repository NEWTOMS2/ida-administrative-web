import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  state$!: Observable<object>;
  title = ""
  ticketDetails = {
    client: "Andres Fernandez",
    phoneNumber: "04141221422",
    email: "example@example.com",
    type: "Problema de envio de SIM",
    agent: "michelle.alleyne@gmail.com"
  }
  ticketStates: any [] = []
  detailsList!: any[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))

    this.state$.subscribe((data:  any) => {
      this.ticketStates = data.states?.map((state: any) => {
        return {
          description: state.description,
          initialDate: state.initialDate,
          state: state.stateName
        }
      })
    })
    this.buildForm()

  }

  buildForm(): void{
    this.detailsList = Object.entries(this.ticketDetails);
  }

}
