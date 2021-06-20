import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = true;
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return false;
    }
    const body = this.loginForm.value;
    this.authService.login(body).subscribe(
      res => { console.log(res) }, err => console.log(err)
    )

  }

}
