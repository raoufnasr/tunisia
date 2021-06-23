import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { SubscriptionService } from '../_services/subscription.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean = true;
  message: string;
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router:Router,
    private filterService:SubscriptionService
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
      res => {
        if (res.success) {
          this.sendAlerte();
          this.router.navigate(['/'])

        }
        else {
          this.message = res.message;
        }
        
      }, err => console.log(err)
    )

  }
  sendAlerte(): void {
    this.filterService.sendAlerte("connected");
  }

}
