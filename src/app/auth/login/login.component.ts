import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HidePasswordService } from 'src/app/shared/services/hide-password.service';
import { images } from '../../core/config/configuration';
import { AuthService } from '../../core/services/auth.service';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword!: HidePasswordService;
  spinnerLoader = false;
  login_image = images.applicationLogo;

  constructor(   
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notification: NotificationsService,
    private hidePasswordService: HidePasswordService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.hidePassword = this.hidePasswordService;
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.spinnerLoader = true;
      const credentials = this.loginForm.value;
      this.authService
        .login(credentials).toPromise()
        .then((data) => {
          this.authService.storeUserData(data.data[0]);
          this.spinnerLoader = false;
          this.router.navigate(['/simulator/dashboard']);
        })
        .catch((error) => {
          this.spinnerLoader = false;
          this.notification.showErrorToast("error");
        });
    }
  }

  validate(): void {
    this.authService.isUserLogged(localStorage.getItem('Token')!).toPromise().then((data)=>{console.log(data)});
  }

  passwordValidation(): boolean {
    // return (
    //   this.loginForm.get('password').errors &&
    //   this.loginForm.get('password').touched
    // );
    return true;
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
