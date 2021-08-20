import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { phonePlanTypes } from 'src/app/core/config/configuration';
import { PhonePlanService } from 'src/app/core/services/phone-plan.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-phone-plan-creation',
  templateUrl: './phone-plan-creation.component.html',
  styleUrls: ['./phone-plan-creation.component.scss']
})
export class PhonePlanCreationComponent implements OnInit {
  @Output() phonePlanCreated = new EventEmitter<any>();

  phonePlanForm!: FormGroup;
  spinnerLoader = false;
  phonePlanTypes = phonePlanTypes;


  constructor(
    private formBuilder: FormBuilder,
    private notification: NotificationsService,
    public dialogRef: MatDialogRef<PhonePlanCreationComponent>,
    private phonePlanService: PhonePlanService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  formatContent(value: string): string {
    return ((searchTranslation(this.translateService, value.toUpperCase())).replace('_', ' '))
  }

  createPhonePlan(): void {
    this.phonePlanForm.markAllAsTouched();

    if (this.phonePlanForm.valid) {
      this.spinnerLoader = true;
      const phonePlan = this.phonePlanForm.value;

      this.phonePlanService.create(phonePlan).toPromise().then(() => {
        this.spinnerLoader = false;
        this.notification.showSuccessToast('PHONE_PLAN_CREATED');
        this.phonePlanService.userCreatedSubject.next();
        this.dialogRef.close();
      }).catch((error) => {
        this.spinnerLoader = false;
        this.notification.showErrorToast("GENERIC_ERROR");
      });
      this.phonePlanCreated.emit(true);

    }
  }

  private buildForm(): void {
    this.phonePlanForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: [''],
      type: ['', Validators.compose([Validators.required])],
      minutes: ['', Validators.compose([Validators.required])],
      sms: ['', Validators.compose([Validators.required])],
      mb: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      duration: ['', Validators.compose([Validators.required])]
    });
  }

}
