import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  spinnerLoader = false;

  constructor(   
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login(): void {
    this.loginForm.markAllAsTouched();

    // if (this.loginForm.valid) {
    //   this.spinnerLoader = true;
    //   const user: User = this.loginForm.value;
    //   this.authService
    //     .login(user)
    //     .then(() => {
    //       this.router.navigate(['/simulator/dashboard']);
    //     })
    //     .catch((error) => {
    //       this.spinnerLoader = false;
    //       this.showErrors(error);
    //     });
    // }
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
