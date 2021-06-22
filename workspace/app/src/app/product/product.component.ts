import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import { CommentaireService } from '../_services/commentaire.service';
import { FavorisService } from '../_services/favoris.service';
import { ProduitService } from '../_services/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  commentaireForm:FormGroup;
  imgPreview="../../../../assets/img/anonyme.png";
  listCommentaire;
  isFavoris:boolean=false;
  searchText:string;
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
  role;
  commNumber:number=0;
  currentClient;
  constructor(private route: ActivatedRoute,
    private commentaireService:CommentaireService,
    private formBuilder:FormBuilder,
    private authService:AuthenticationService,
    private favorService: FavorisService,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    this.initCommentaireForm();
    this.getClient();
    this.route.paramMap.subscribe((params) => {
      this.paramCategorytId = params.get('id');
    });
    if (this.paramCategorytId) {
      this.getInfoProduit();
      this.getCommentaire();
      this.getIfFavoris();
    }
  
    

  }
  initCommentaireForm(){
    this.commentaireForm=this.formBuilder.group({
      commentaire:[null, Validators.required]
    })
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


  getClient() {
    this.authService
      .getuserByToken()
      .subscribe(
        (data: any) => {
          this.role = JSON.parse(localStorage.getItem("role"));
          this.currentClient = data.client[0];
        
        },
        (err) => {
          console.log(err);
        }
      );
  }


  getCommentaire(){
    const body={ 
    product_id: parseInt(this.paramCategorytId),}

    this.commentaireService.getCommentaire(body).subscribe(res=>{
      this.listCommentaire=res.data;
    this.commNumber=this.listCommentaire.length;
    },err=>console.log(err))
  }

  createCommentaire(){
    const body={ user_id:this.currentClient.id,
    product_id: parseInt(this.paramCategorytId),
  commentaire:this.commentaireForm.get('commentaire').value}

    this.commentaireService.create(body).subscribe(res=>{
      this.getCommentaire();
    },err=>console.log(err))
  }


  getIfFavoris() {
    const body = {
      user_id: this.currentClient.id,
      product_id: parseInt(this.paramCategorytId),
    }
    this.favorService.getIfFavoris(body).subscribe(res => {
      if (res.success) {
        if(res.result.length > 0) {
          this.isFavoris=true;
        }
        else{
          this.isFavoris=false;
        }
      }
    },
      err => console.log(err))

  }


  checkFavoris() {
    const body = {
      user_id: this.currentClient.id,
      product_id: parseInt(this.paramCategorytId),
    }
    this.favorService.checkFavoris(body).subscribe(res => {
      if (res.success) {
        this.getIfFavoris();
      }
    },
      err => console.log(err))

  }


}
