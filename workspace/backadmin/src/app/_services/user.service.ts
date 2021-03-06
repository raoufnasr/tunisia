import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }


  getUser() {
    return this.http.get<any>(`${this.config.apiUrl}user/getAllUsers`);
  }


  login(data) {
    return this.http.post<any>(`${this.config.apiUrl}user/login`, data).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentClient', JSON.stringify(user.token));
      }
      return user;
    }));
  }
}
