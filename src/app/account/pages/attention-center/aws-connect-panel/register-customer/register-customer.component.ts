import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { emailPattern, address, clientTypes } from 'src/app/core/config/configuration';
import { UsersService } from 'src/app/core/services/users.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent implements OnInit {
  userForm!: FormGroup;
  spinnerLoader = false;
  newUserSelected = false;
  countries = address.map((address) => address.country);
  cities!: Array<string>;

  addresses = address;
  clientTypes = clientTypes;

  constructor(
    private dialogRef: MatDialogRef<RegisterCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private usersService: UsersService,
    private notificationService: NotificationsService,
    private cdRef: ChangeDetectorRef,

  ) {}

  ngOnInit(): void {
    this.getCities();
    this.buildForm();
  }

  public searchStates(
    selectedCountry: string
  ): String [] | [] {
    const country = this.addresses.find((country) => country.country === selectedCountry);

    return country ?  country.cities : []
  }

  getCities(country?: any): void {
    let c = this.countries[0];
    if (country) {
      c = country;
    }
    this.cities = address.find((address) => address.country === c)?.cities!;
    if (country) this.userForm.get('city')?.setValue(this.cities[0]);
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      phone_number: [this.dialogData.phoneNumber.replace("+","") || '', [Validators.required]],
      country: [this.countries[0], [Validators.required]],
      city: [this.cities[0],[Validators.required]],
      detail_address: [''],
      is_mvno_client: [this.clientTypes[0]],
    });
    this.cdRef.markForCheck()
  }

  formatContent(value: string): string {
    return searchTranslation(
      this.translateService,
      value.toUpperCase()
    ).replace('_', ' ');
  }

  createCustomer(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      this.spinnerLoader = true
      const user = {...this.userForm.value};
      user.is_mvno_client = user.is_mvno_client == "EXIS_CLIENT" ? true : false;
      this.usersService.createCustomer(user).toPromise().then(() => {
        this.notificationService.showSuccessToast('USER_REGISTERED');
        this.spinnerLoader = false;
        this.dialogRef.close(user);
      }).catch((error)=>{
        if (error == "Duplicated key") {
          this.notificationService.showErrorToast("DUPLICATED_KEY");
        }else this.notificationService.showErrorToast("GENERIC_ERROR");
        this.spinnerLoader = false;
      })
    }
  }

  setNewUser(): void {
    this.newUserSelected = !this.newUserSelected;
  }
}
