import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { address, emailPattern, userStates, userTypes } from 'src/app/core/config/configuration';
import { User } from 'src/app/core/models/user.interface';
import { searchTranslation } from 'src/app/utils/searchTranslation';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: User;
  userDetailsForm!: FormGroup;
  addresses = address;
  userTypes = userTypes;
  userStates = userStates;
  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  
  formatContent(value: string): string {
    return ((searchTranslation(this.translateService, value.toUpperCase())).replace('_', ' '))
  }

  public searchStates(
    selectedCountry: string
  ): String [] | [] {
    const country = this.addresses.find((country) => country.code === selectedCountry);
    
    return country ?  country.cities : []
  }


  private buildForm(): void {
    console.log(this.user)
    this.userDetailsForm = this.formBuilder.group({
      name: [this.user.name, Validators.compose([Validators.required, Validators.minLength(3)])],
      last_name: [this.user.lastname, Validators.compose([Validators.required, Validators.minLength(3)])],
      phone_number: [this.user.phoneNumber, Validators.compose([Validators.required, Validators.minLength(7)])],
      email: [this.user.email, Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
      country: [this.user.country, []],
      city: [this.user.country ],
      detail_address: [this.user.address],
      role: [this.user.role],
      state: [this.user.state]
    });
  }

  seeRequests(): void{
    console.log( this.user.email)
    this.router.navigateByUrl('/account/tickets', { state: {  
      userToFilter: this.user.email
    }})
  }
}
