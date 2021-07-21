import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { emailPattern } from 'src/app/core/config/configuration';
import { UsersService } from 'src/app/core/services/users.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-users-creation',
  templateUrl: './users-creation.component.html',
  styleUrls: ['./users-creation.component.scss']
})
export class UsersCreationComponent implements OnInit {
  userForm!: FormGroup;
  spinnerLoader = false;
  cities = ['Ciudad de México']
  userTypes = [ 'agent', 'admin']
  countries = [ 'MEXICO', 'UNITED_STATES']

  constructor(   
    private formBuilder: FormBuilder,
    private notification: NotificationsService,
    public dialogRef: MatDialogRef<UsersCreationComponent>,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public createUser(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      console.log(this.userForm)
      this.spinnerLoader = true;

      const values = this.userForm.value
      this.usersService.create(values).toPromise()
      .then(() => {
        this.notification.showSuccessToast('USER_REGISTERED')
      })
      .catch((error) => {
        this.spinnerLoader = false;
        console.log(error)
        this.notification.showErrorToast(error);
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
      country: ['UNITED_STATES',  Validators.compose([Validators.required])],
      city:  ['Colorado', Validators.compose([Validators.required])],
      detail_address:  [''],
    });
  }
}
