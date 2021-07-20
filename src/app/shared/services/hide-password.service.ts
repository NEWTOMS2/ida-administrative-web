import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HidePasswordService {
  public toogleIcon = faEyeSlash;
  public passwordType = 'password';
  public passwordShown = false;

  constructor() {}

  hidePassword(): void {
    if (this.passwordShown) {
      this.passwordType = 'password';
      this.passwordShown = false;
      this.toogleIcon = faEyeSlash;
    } else {
      this.passwordType = 'text';
      this.passwordShown = true;
      this.toogleIcon = faEye;
    }
  }

  clear(): void {
    this.passwordType = 'password';
    this.passwordShown = false;
    this.toogleIcon = faEyeSlash;
  }
}
