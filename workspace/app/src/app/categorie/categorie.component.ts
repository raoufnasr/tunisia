import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private categoryService: CategorieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.listCategory = res.category;

    },
      err => console.log(err))
  }

  goTo(element) {

    this.router.navigate(['/detail-category/', element])
  }


}
