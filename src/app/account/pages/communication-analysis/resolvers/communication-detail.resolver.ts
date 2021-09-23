import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CommunicationDetail } from 'src/app/core/models/real-time-communication.interface';
import { RealtimeCommunicationsService } from 'src/app/core/services/realtime-communications.service';
@Injectable({
  providedIn: 'root'
})

export class CommunicationDetailResolver implements Resolve<CommunicationDetail> {
  constructor(
    private realtimeCommunicationsService: RealtimeCommunicationsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CommunicationDetail> {
    const contactId = route.paramMap.get('contactId');
    const communicationDetail$ = this.realtimeCommunicationsService.getCommunicationDetail(contactId!);
    return communicationDetail$;
  }
}
