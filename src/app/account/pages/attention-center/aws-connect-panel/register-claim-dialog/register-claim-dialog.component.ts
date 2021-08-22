import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { claimTypes, emailPattern } from 'src/app/core/config/configuration';
import { TicketsService } from 'src/app/core/services/tickets.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-register-claim-dialog',
  templateUrl: './register-claim-dialog.component.html',
  styleUrls: ['./register-claim-dialog.component.scss'],
})
export class RegisterClaimDialogComponent implements OnInit {
  claimForm!: FormGroup;
  userForm!: FormGroup;
  spinnerLoader = false;
  newUserSelected = false;
  isChecked: any = false;
  claimTypes = claimTypes;
  constructor(
    private dialogRef: MatDialogRef<RegisterClaimDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private ticketsService: TicketsService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      email: [
        this.dialogData.email || '',
        Validators.compose([
          Validators.required,
          Validators.pattern(emailPattern),
        ]),
      ],
      name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      phone_number: ['', Validators.compose([Validators.required])],
      newUser: [false],
    });
    this.claimForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(emailPattern),
        ]),
      ],
      type: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  formatContent(value: string): string {
    return searchTranslation(
      this.translateService,
      value.toUpperCase()
    ).replace('_', ' ');
  }

  createClaim(): void {
    const isNewUser = this.userForm.get('newUser')?.value;
    this.claimForm.get('email')?.setValue(this.userForm.get('email')?.value);
    this.claimForm.get('email')?.updateValueAndValidity;
    this.claimForm.markAllAsTouched();
    this.userForm.markAllAsTouched();

    if (
      this.claimForm.valid &&
      ((isNewUser && this.userForm.valid) || !isNewUser)
    ) {
      this.spinnerLoader = true;
      const user = {
        email: this.userForm.get('email')?.value,
        name: this.userForm.get('name')?.value,
        last_name: this.userForm.get('last_name')?.value,
        phone_number: this.userForm.get('phone_number')?.value,
      };

      const claimForm = {
        type: this.claimForm.get('type')?.value,
        description: this.claimForm.get('description')?.value,
      };

      const ticket = isNewUser
        ? { ...user, ...claimForm }
        : { email: user.email, ...claimForm };

      this.ticketsService
        .create(ticket)
        .toPromise()
        .then(() => {
          this.notificationService.showSuccessToast(
            'TICKET_SUCCESSFULLY_CREATED'
          );
          this.dialogRef.close();
        })
        .catch(() => {
          this.notificationService.showErrorToast('GENERIC_ERROR');
        })
        .finally(() => (this.spinnerLoader = false));
    }
  }

  setNewUser(): void {
    this.newUserSelected = !this.newUserSelected;
  }
}
