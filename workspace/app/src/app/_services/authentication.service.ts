import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }


  login(data) {
    return this.http.post<any>(`${this.config.apiUrl}user/login`, data).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentClient', JSON.stringify(user.token));
      }
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentClient');
    localStorage.removeItem('role');
}

  register(data) {
    return this.http.post<any>(`${this.config.apiUrl}user/register`, data);
  }


  getuserByToken() {
    let currentClient: any = localStorage.getItem('currentClient')
    return this.http.post<any>(this.config.apiUrl + 'user/getUserByToken', { token: JSON.parse(currentClient) })
      .pipe(map(result => {
        return result;
      }));
  }

  UpdateProfile(body){
    return this.http.post<any>(this.config.apiUrl + 'user/update',body)
      
  }

  uploadImage(body){
    return this.http.post<any>(this.config.apiUrl + 'user/addimages',body)
    
  }
}
