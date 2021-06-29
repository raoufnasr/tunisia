import { Component, OnInit } from '@angular/core';
import List from "list.js";
import { CategoryService } from 'src/app/_services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
listCategory;
  constructor(
    private CategoryService:CategoryService,
  ) { }

  ngOnInit() {
    this.getAllCatagory();
    new List(document.getElementById("first-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("second-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
    new List(document.getElementById("third-list"), {
      valueNames: ["name", "budget", "status", "completion"],
      listClass: "list"
    });
  }

getAllCatagory(){
  this.CategoryService.getAllCategory().subscribe(res=>{console.log(res)
  this.listCategory=res.category;
  console.log(this.listCategory)
  },
  err=>{console.log(err)})

}

}
