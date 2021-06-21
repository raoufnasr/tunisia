import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { FavorisComponent } from './favoris/favoris.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'favoris', component: FavorisComponent
  },
  {
    path: 'categories', component: CategorieComponent
  },
  {
    path: 'detail-category/:id', component: DetailCategoryComponent
  },
  {
    path: 'profil', component: ProfilComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
