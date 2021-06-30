import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionService } from 'src/app/_services/subscription.service';
import {Location} from '@angular/common';
import { AuthenticationService } from '../../_services/authentication.service';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
loggedIn:boolean=false;
role:string;
currentClient;
subscription:Subscription;
 switchStatus:boolean = false;
  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private filterService:SubscriptionService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getConnection();

    this.location.onUrlChange(url=>{
      console.log(url)
      $("#toggle").prop('checked', true).trigger("click");

    })


  
  }

  getClient() {
    this.authService
      .getuserByToken()
      .subscribe(
        (data: any) => {
          if(data.success){
          this.role = JSON.parse(localStorage.getItem("role"));
          this.currentClient = data.client[0];
        this.loggedIn=true;}
          else{
            this.loggedIn=false;
          }
          
        },
        (err) => {
          console.log(err);
        }
      );
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
    this.router.navigate(['/login']);
}

getConnection() {
  this.subscription = this.filterService.getAlerte().subscribe(message => {
 
    if (message.text == "connected") {
      this.loggedIn=true;
    }

  });
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}




}
