import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import { FavorisService } from '../_services/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {

  role: string;
  currentClient;
  listFavoris;
  public config = {
    apiUrl: environment.url
  };
  constructor(
    private authService: AuthenticationService,
    private favorService: FavorisService,
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
          this.currentClient = data.client[0];
          this.getFavorisByUser();
        },
        (err) => {
          console.log(err);
        }
      );
  }


  getFavorisByUser() {
    const body = {
      id: this.currentClient.id,
    }
    this.favorService.getFavorisByUser(body).subscribe(res => {
      if (res.success) {
        this.listFavoris = res.result;

        this.listFavoris.forEach(element => {
          let obj = JSON.parse(element.products.image);
          element.products.image = obj;

        });

      }
    },
      err => console.log(err))

  }


  checkFavoris(element) {
    const body = {
      user_id: this.currentClient.id,
      product_id: element.id,
    }
    this.favorService.checkFavoris(body).subscribe(res => {
      if (res.success) {
        this.getFavorisByUser();
      }
    },
      err => console.log(err))

  }

}
