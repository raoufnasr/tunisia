import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategorieService } from '../_services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  listCategory;
  public config = {
    apiUrl: environment.url
  };
  imgPreview = '../../assets/img/miel.jpg';

  constructor(
    private categoryService: CategorieService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(res => {
      console.log(res);
      this.listCategory = res.category;

    },
      err => console.log(err))
  }

}
