import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProduitService } from '../_services/produit.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {
  listProduit;
  paramCategorytId;
  public config = {
    apiUrl: environment.url
  };
  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramCategorytId = params.get('id');
    });
    if (this.paramCategorytId) {
      this.getProduitByCategory();
    }

  }

  getProduitByCategory() {
    const body = { id: this.paramCategorytId }
    this.produitService.getProduitByCategory(body).subscribe(res => {
      console.log(res);
      this.listProduit = res.result;
      this.listProduit.forEach(element => {
        let obj = JSON.parse(element.image);
        element.image = obj;

      });

    },
      err => console.log(err))
  }

}
