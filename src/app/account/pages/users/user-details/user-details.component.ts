import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { address, emailPattern, userStates, userTypes } from 'src/app/core/config/configuration';
import { User } from 'src/app/core/models/user.interface';
import { UsersService } from 'src/app/core/services/users.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() user!: User;
  userDetailsForm!: FormGroup;
  addresses = address;
  userTypes!: any[];
  userStates!: any[];
  spinnerLoader = false;

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private router: Router,
    private userService: UsersService,
    private notification: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.buildEnums();
    this.buildForm();
  }

  
  formatContent(value: string): string {
    return ((searchTranslation(this.translateService, value.toUpperCase())).replace('_', ' '))
  }

  buildEnums(): void{
    this.userTypes = userTypes.map((type) => {
      return {
        type,
        translatedType: searchTranslation(this.translateService, type.toUpperCase())
      }
    })

    this.userStates = userStates.map((state) => {
      return {
        state,
        translatedState: searchTranslation(this.translateService, state)
      }
    })
  }

  public searchStates(
    selectedCountry: string
  ): String [] | [] {
    const country = this.addresses.find((country) => (country.country === selectedCountry) || (country.code === selectedCountry));
    return country ?  country.cities : []
  }

  public updateUser(): void{
    if (this.userDetailsForm.valid && this.userDetailsForm.dirty){
      this.spinnerLoader= true;
      const cleanedUser: any =  {};
       (Object.entries(this.userDetailsForm.value).filter((value) => value[1] != null)).forEach((value) => {
        cleanedUser[value[0]] = value[1]
      })

      console.log(cleanedUser)


      let {state, role, email, ...user} = cleanedUser;
      state = (this.userStates.find((s)=> (s.translatedState == state) || (s.state == state) ))?.state
      role = (this.userTypes.find((t)=> (t.translatedType == role) || t.type == role))?.type

      const updatedUser = {
        ...user,
        state: state == 'INACTIVE' ? 'OFF_LINE': 'AVAILABLE',
        role,
      }


      this.userService
          .update(updatedUser, this.user.id || 0)
          .toPromise()
          .then(() => {
            this.spinnerLoader = false;
            this.notification.showSuccessToast('USER_SUCCESSFULLY_UPDATED');
            this.update.emit(this.userDetailsForm.value)
          })
          .catch((error) => {
            this.spinnerLoader = false;
            if (error == "Duplicated key"){
              error = "DUPLICATED_PHONE_NUMBER"
            }else error = "GENERIC_ERROR"
            this.notification.showErrorToast(error);
          });

    }
  }

  private buildForm(): void {
    console.log(this.user)
    this.userDetailsForm = this.formBuilder.group({
      name: [this.user.name, Validators.compose([Validators.required, Validators.minLength(3)])],
      last_name: [this.user.lastname, Validators.compose([Validators.required, Validators.minLength(3)])],
      phone_number: [this.user.phoneNumber, Validators.compose([Validators.required, Validators.minLength(7)])],
      email: [this.user.email, Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      country: [(this.addresses.find((address) => address.code == (this.user.country || 'MÉXICO')))?.code, []],
      city: [this.user.city],
      detail_address: [this.user.address],
      role: [this.user.role],
      state: [this.user.state]
    });
  }

  seeRequests(): void{
    this.router.navigateByUrl('/account/tickets', { state: {  
      userToFilter: this.user.email
    }})
  }
}
