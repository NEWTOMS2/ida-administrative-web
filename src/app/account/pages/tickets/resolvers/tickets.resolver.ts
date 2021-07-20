import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Ticket } from 'src/app/core/models/ticket.interface';
import { TicketsService } from 'src/app/core/services/tickets.service';

@Injectable()
export class TicketsResolver implements Resolve<Observable<Ticket[]>> {
  constructor(
    private ticketsService: TicketsService
  ) {}

  resolve(): Observable<Ticket[]> {
    const tickets$ = this.ticketsService.get();
    return tickets$;
  }
}
