import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisrty',
  templateUrl: './regisrty.component.html',
  styleUrls: ['./regisrty.component.scss']
})
export class RegisrtyComponent implements OnInit {
  loginForm: FormGroup;

  registryForm: FormGroup;
  passwordControl: FormControl;
  repeatPasswordControl: FormControl;

  hasMatchingError = false;
  isLogin = true;

  constructor(public userService: UserService, public router: Router) {

  }

  ngOnInit(): void {
      this.loginForm = new FormGroup({
        "email": new FormControl("", [Validators.required, Validators.email]),
        "password": new FormControl("", [Validators.required])
      });
      this.repeatPasswordControl = new FormControl("", [Validators.required]);
      this.passwordControl = new FormControl("", [Validators.required]);
      this.registryForm = new FormGroup({
        "email": new FormControl("", [Validators.required, Validators.email]),
        "name": new FormControl("", [Validators.required])
      });
      this.registryForm.addControl("password", this.passwordControl);
      this.registryForm.addControl("repeat-password", this.repeatPasswordControl);

      combineLatest([
        this.passwordControl.valueChanges, 
        this.repeatPasswordControl.valueChanges
      ]).subscribe(() => {
        if (this.passwordControl.value === this.repeatPasswordControl.value) {
          this.hasMatchingError = true;
        } else {
          this.hasMatchingError = false;
        }
      });
  }

  changeForm() {
    this.isLogin = !this.isLogin;
  }

  submitData() {
    if (this.isLogin) {
      if (this.userService.checkUser(this.loginForm.getRawValue())) {
        console.log('PROSHLI!!!!!!!!!');
        console.log('ACTIVE USER IS: name: ' + this.userService.activeUser.name + ', email: ' + this.userService.activeUser.email)
        // this.router.navigate(['/market']);
      }
    } else {
      this.userService.registration(this.registryForm.getRawValue());
    }
  }
}
