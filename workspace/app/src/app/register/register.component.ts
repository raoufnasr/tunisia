import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  matDatepickerFilter;
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  message: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();

  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      username: [null, Validators.required],
      phone: [null,],
      ville: [null,],
      adresse: [null,],
      cp: [null],
      pays: [null],
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return false;
    }
    const body = this.registerForm.value;
    this.authService.register(body).subscribe(
      res => {
        if (res.success) {
          this.router.navigate(['login'])

        }
        else {
          this.message = res.message;
        }
       
      }, err => console.log(err)
    )

  }

}
