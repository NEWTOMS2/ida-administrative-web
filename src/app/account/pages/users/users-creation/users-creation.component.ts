import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { address, emailPattern, userTypes } from 'src/app/core/config/configuration';
import { UsersService } from 'src/app/core/services/users.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-users-creation',
  templateUrl: './users-creation.component.html',
  styleUrls: ['./users-creation.component.scss']
})
export class UsersCreationComponent implements OnInit {
  userForm!: FormGroup;
  spinnerLoader = false;
  userTypes = userTypes;
  addresses = address;


  constructor(   
    private formBuilder: FormBuilder,
    private notification: NotificationsService,
    public dialogRef: MatDialogRef<UsersCreationComponent>,
    private usersService: UsersService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  formatContent(value: string): string {
    return ((searchTranslation(this.translateService, value.toUpperCase())).replace('_', ' '))
  }


  public searchStates(
    selectedCountry: string
  ): String [] | [] {
    const country = this.addresses.find((country) => country.country === selectedCountry);

    return country ?  country.cities : []
  }

  public createUser(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      this.spinnerLoader = true;
      const {country: selectedCountry, ...userData} = this.userForm.value

      const user = { ...userData, country:  this.addresses.find((country) => country.country === selectedCountry)?.code }

      this.usersService.create(user).toPromise()
      .then(() => {
        this.spinnerLoader = false;
        this.notification.showSuccessToast('USER_CREATED');
        this.dialogRef.close()
      })
      .catch((error) => {
        this.spinnerLoader = false;
        const errorDetail = error.includes("already exists") ? 'USER_ALREADY_EXISTS' : 'GENERIC_ERROR'
        this.notification.showErrorToast(errorDetail);
      });
    }
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      phone_number: ['', Validators.compose([Validators.required])],
      role: ['agent', Validators.compose([Validators.required])],
      country: ['México',  Validators.compose([Validators.required])],
      city:  ['Aguascalientes', Validators.compose([Validators.required])],
      detail_address:  [''],
    });
  }
}
