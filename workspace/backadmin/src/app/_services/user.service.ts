import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }


  getAllUser() {
    return this.http.get<any>(`${this.config.apiUrl}user/getAllUsers`);
  }
}
