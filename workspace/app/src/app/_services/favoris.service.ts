import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }



  getFavorisByUser(data) {
    return this.http.post<any>(`${this.config.apiUrl}favoris/getFavorisByUser`, data);
  }

  checkFavoris(data) {
    return this.http.post<any>(`${this.config.apiUrl}favoris/checkFavoris`, data);
  }

  getIfFavoris(data) {
    return this.http.post<any>(`${this.config.apiUrl}favoris/getIfFavoris`, data);
  }
}
