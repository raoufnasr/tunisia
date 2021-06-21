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


  get() {
    return this.http.get<any>(`${this.config.apiUrl}category/getAll`);
  }
}
