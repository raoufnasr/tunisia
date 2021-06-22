import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  public config = {
    apiUrl: environment.url
  };
  constructor(private http: HttpClient) { }

  create(body) {
    return this.http.post<any>(`${this.config.apiUrl}commentaire/create`,body);
  }

  getCommentaire(body) {
    return this.http.post<any>(`${this.config.apiUrl}commentaire/getCommentaireByProduct`,body);
  }
}
