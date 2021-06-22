import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subject = new Subject<any>();

  sendAlerte(message: any) {
    this.subject.next({ text: message });
  }

  clearAlerte() {
    this.subject.next();
  }

  getAlerte(): Observable<any> {
    return this.subject.asObservable();
  }

}
