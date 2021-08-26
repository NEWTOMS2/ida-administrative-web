import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhonePlan } from 'src/app/core/models/phone-plans.interface';
import { PhonePlanService } from 'src/app/core/services/phone-plan.service';

@Injectable({
  providedIn: 'root'
})
export class PhonePlanResolver implements Resolve<PhonePlan[]> {
  constructor(
    private phonePlanService: PhonePlanService
  ) {}

  resolve(): Observable<PhonePlan[]> {
    const phonePlans$ = this.phonePlanService.get();
    return phonePlans$;
  }
}
