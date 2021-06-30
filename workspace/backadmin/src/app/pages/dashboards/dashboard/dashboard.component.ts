import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/_services/category.service";
import { CommentaireService } from "src/app/_services/commentaire.service";
import { ProductService } from "src/app/_services/product.service";
import { UserService } from "src/app/_services/user.service";



@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  nbeProduct;
  nbeCategory;
  nbeCommentaire;
  nbreUser;

  constructor(private productService:ProductService,
    private CategoryService:CategoryService,
    private commentaireService:CommentaireService,
    private userService:UserService) {}

  ngOnInit() {
    this.getAllProduct();
    this.getAllCatagory();
    this.getAllCommentaire();
    this.getAllUser();
  }
  
  getAllProduct(){
    this.productService.getAllProduct().subscribe(res=>{
     this.nbeProduct=res.product.length; 
    },
    err=>{console.log(err)})
  
  }
  getAllCatagory(){
    this.CategoryService.getAllCategory().subscribe(res=>{
    this.nbeCategory=res.category.length;
    },
    err=>{console.log(err)})
  
  }
  getAllCommentaire(){
    this.commentaireService.getAllCommentaire().subscribe(res=>{
    this.nbeCommentaire=res.data.count;
    },
    err=>{console.log(err)})
  
  }
  getAllUser(){
    this.userService.getUser().subscribe(res=>{
     this.nbreUser =res.user.length; 
    },
    err=>{console.log(err)})
  
  }

 
}
