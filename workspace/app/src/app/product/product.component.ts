import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProduitService } from '../_services/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  slides = [
    { img: "https://via.placeholder.com/600.png/09f/fff" },
    { img: "https://via.placeholder.com/600.png/021/fff" },
    { img: "https://via.placeholder.com/600.png/321/fff" },
    { img: "https://via.placeholder.com/600.png/422/fff" },
    { img: "https://via.placeholder.com/600.png/654/fff" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
  paramCategorytId;
  produit;
  public config = {
    apiUrl: environment.url
  };
  constructor(private route: ActivatedRoute,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramCategorytId = params.get('id');
    });
    if (this.paramCategorytId) {
      this.getInfoProduit()
    }

  }

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  getInfoProduit() {
    const body = { id: this.paramCategorytId }
    this.produitService.getProduitById(body).subscribe(res => {

      this.produit = res.result[0];
      console.log(this.produit);

      let obj = JSON.parse(this.produit.image);
      console.log(obj);
      this.produit.image = obj;



    },
      err => console.log(err))


  }


}
