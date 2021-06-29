import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }


  gtAllProduct() {
    return this.http.get<any>(`${this.config.apiUrl}product/getAll`);
  }
}
