import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {

  role: string;
  currentClient;
  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.authService
      .getuserByToken()
      .subscribe(
        (data: any) => {
          this.role = JSON.parse(localStorage.getItem("role"));
          this.currentClient = data.client;

        },
        (err) => {
          console.log(err);
        }
      );
  }



}
