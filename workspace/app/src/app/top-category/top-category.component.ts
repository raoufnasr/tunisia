import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategorieService } from '../_services/categorie.service';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.scss']
})
export class TopCategoryComponent implements OnInit {

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
