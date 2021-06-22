import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  registerForm: FormGroup;
  role: string;
  currentClient;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
    this.getClient();
  }


  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      username: [null, Validators.required],
      avatar: [null],
      phone: [null,],
      ville: [null,],
      adresse: [null,],
      cp: [null],
      pays: [null],
    })
  }

  getClient() {
    this.authService
      .getuserByToken()
      .subscribe(
        (data: any) => {
          this.role = JSON.parse(localStorage.getItem("role"));
          this.currentClient = data.client[0];
          this.profilInfo(this.currentClient);

        },
        (err) => {
          console.log(err);
        }
      );
  }

  profilInfo($event) {
    console.log($event)
    this.registerForm.setValue({
      nom: $event.nom ? $event.nom : '',
      prenom: $event.prenom ? $event.prenom : '',
      email: $event.email ? $event.email : null,
      password: $event.password ? $event.password : '',
      username: $event.username ? $event.username : null,
      avatar: $event.avatar ? $event.avatar : null,
      phone: $event.phone ? $event.phone : '',
      ville: $event.ville ? $event.ville : '',
      adresse: $event.adresse ? $event.adresse : '',
      cp: $event.cp ? $event.cp : '',
      pays: $event.pays ? $event.pays : '',
    });

  }

  updateProfile() {
    const body = this.registerForm.value;
    this.authService.UpdateProfile(body).subscribe(res => {
      console.log(res),
      err => console.log(err)
    })
  }

}
