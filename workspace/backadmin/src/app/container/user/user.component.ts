import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listUser;
  constructor(private userServive:UserService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.userServive.getAllUser().subscribe(res=>{console.log(res)
     this.listUser =res.user; 
    },
    err=>{console.log(err)})
  
  }
  
}
