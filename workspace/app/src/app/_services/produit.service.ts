import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }

  getProduitByCategory(data) {
    return this.http.post<any>(`${this.config.apiUrl}product/getProductbyCategory`, data);
  }

  getProduitById(data) {
    return this.http.post<any>(`${this.config.apiUrl}product/getproductbyid`, data);
  }

}
