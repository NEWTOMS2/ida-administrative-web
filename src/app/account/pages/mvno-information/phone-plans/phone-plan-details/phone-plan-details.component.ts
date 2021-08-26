import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { phonePlanStates, phonePlanTypes } from 'src/app/core/config/configuration';
import { PhonePlan } from 'src/app/core/models/phone-plans.interface';
import { PhonePlanService } from 'src/app/core/services/phone-plan.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-phone-plan-details',
  templateUrl: './phone-plan-details.component.html',
  styleUrls: ['./phone-plan-details.component.scss']
})
export class PhonePlanDetailsComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() phonePlan!: PhonePlan;
  phonePlanDetailForm!: FormGroup;
  //addresses = address;
  phonePlanTypes!: any[];
  phonePlanStates!: any[];
  spinnerLoader = false;
  showUpdate = false;
  actualPhonePlan!: PhonePlan;
  phonePlanState!: string;

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private router: Router,
    private phonePlanService: PhonePlanService,
    private notification: NotificationsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildEnums();
    this.buildUser();
    this.getCurrentState();
    this.buildForm();
  }


  formatContent(value: string): string {
    return ((searchTranslation(this.translateService, value.toUpperCase())).replace('_', ' '))
  }

  buildEnums(): void {
    this.phonePlanTypes = phonePlanTypes.map((type) => {
      return {
        type,
        translatedType: searchTranslation(this.translateService, type.toUpperCase())
      }
    })

    this.phonePlanStates = phonePlanStates.map((state) => {
      return {
        state,
        translatedState: searchTranslation(this.translateService, state)
      }
    })
  }

  getCurrentState(): void {
    this.phonePlanState = this.phonePlan.states.filter((phonePlan) => phonePlan.final_date == null)[0].state_name;
  }

  updatePhonePlan(): void {
    if (this.phonePlanDetailForm.valid && this.phonePlanDetailForm.dirty) {
      this.spinnerLoader = true;
      const phonePlan = {...this.phonePlanDetailForm.value};

      const state = (this.phonePlanStates.find((s) => (s.translatedState == phonePlan.state) || (s.state == phonePlan.state)))?.state

      if (this.phonePlanState != state) {
        phonePlan.status = {
          "name": state,
          "description": ""
        }
      }
      phonePlan.type = (this.phonePlanTypes.find((t) => (t.translatedType == phonePlan.type) || t.type == phonePlan.type))?.type
      delete phonePlan.state;
      this.phonePlanService.update(phonePlan, this.phonePlan.id!).toPromise()
        .then(() => {
          this.spinnerLoader = false;
          this.notification.showSuccessToast('PHONE_PLAN_SUCCESSFULLY_UPDATED');
          this.phonePlanState = state;
          this.phonePlanDetailForm.markAsPristine();
          this.update.emit(this.phonePlanDetailForm.value)
        })
        .catch((error) => {
          this.spinnerLoader = false;
          this.notification.showErrorToast("GENERIC_ERROR");
        });;
    }
  }

  private buildUser(): void {
    this.activatedRoute.data.subscribe((data: Partial<{ phonePlan: PhonePlan }>) => {
      this.actualPhonePlan = data.phonePlan as PhonePlan
      this.showUpdate = (data.phonePlan?.id == this.phonePlan.id) ? false : true
    });
  }

  private buildForm(): void {
    this.phonePlanDetailForm = this.formBuilder.group({
      name: [this.phonePlan.name, Validators.compose([Validators.required])],
      description: [this.phonePlan.description],
      type: [this.phonePlan.type, Validators.compose([Validators.required])],
      minutes: [this.phonePlan.minutes, Validators.compose([Validators.required])],
      sms: [this.phonePlan.sms, Validators.compose([Validators.required])],
      mb: [this.phonePlan.mb, Validators.compose([Validators.required])],
      price: [this.phonePlan.price, Validators.compose([Validators.required])],
      duration: [this.phonePlan.duration, Validators.compose([Validators.required])],
      state: [this.phonePlanState, Validators.compose([Validators.required])]
    });
  }
}