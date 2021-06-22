import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { FullPubComponent } from './full-pub/full-pub.component';
import { TopCategoryComponent } from './top-category/top-category.component';
import { CardComponent } from './card/card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AideComponent } from './aide/aide.component';
import { FavorisComponent } from './favoris/favoris.component';
import { CategorieComponent } from './categorie/categorie.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ProductComponent } from './product/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    SliderComponent,
    InfosClientComponent,
    FullPubComponent,
    TopCategoryComponent,
    CardComponent,
    RegisterComponent,
    LoginComponent,
    AideComponent,
    FavorisComponent,
    CategorieComponent,
    DetailCategoryComponent,
    ProfilComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    Ng2SearchPipeModule,
    NgbTabsetModule, HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
