import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationModule } from "./pages/presentation/presentation.module";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { CategoryComponent } from './container/category/category.component';
import { UserComponent } from './container/user/user.component';
import { ProduitComponent } from './container/produit/produit.component';
import { ModalUserComponent } from './container/shared/modal-user/modal-user.component';
import { ModalProductComponent } from './container/shared/modal-product/modal-product.component';
import { ModalCategoryComponent } from './container/shared/modal-category/modal-category.component';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, CategoryComponent, UserComponent, ProduitComponent, ModalUserComponent, ModalProductComponent, ModalCategoryComponent, LoginComponent, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
