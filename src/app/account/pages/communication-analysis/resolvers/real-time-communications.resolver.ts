import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';

import { RealTimeCommunication } from 'src/app/core/models/real-time-communication.interface';
import { RealtimeCommunicationsService } from 'src/app/core/services/realtime-communications.service';

@Injectable({
  providedIn: 'root'
})
export class RealTimeCommunicationsResolver implements Resolve<RealTimeCommunication[]> {
  constructor(
    private realtimeCommunicationsService: RealtimeCommunicationsService
  ) {}

  resolve(): Observable<RealTimeCommunication[]> {
    const communications$ = this.realtimeCommunicationsService.getCommunications();
    return communications$;
  }
}
