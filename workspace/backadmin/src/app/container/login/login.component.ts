import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  focus;
  focus1;
  loginForm:FormGroup;
  message:string;
  isSubmitted:boolean=false;
  username:string='';
  constructor(
    private authService:UserService,
    private router:Router,
    private formBuilder:FormBuilder
  ) {}

 
  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password:  new FormControl(null),
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
          this.router.navigate(['/dashboards/dashboard'])

        }
        else {
          this.message = res.message;
        }
        
      }, err => console.log(err)
    )

  }

}
