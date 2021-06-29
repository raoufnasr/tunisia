import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  listProduct;
  constructor(private productServive:ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productServive.gtAllProduct().subscribe(res=>{console.log(res)
     this.listProduct=res.product; 
    },
    err=>{console.log(err)})
  
  }
}
