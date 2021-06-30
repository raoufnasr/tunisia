import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { CategoryComponent } from "./container/category/category.component";
import { UserComponent } from "./container/user/user.component";
import { ProduitComponent } from "./container/produit/produit.component";
import { ModalCategoryComponent } from "./container/shared/modal-category/modal-category.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "examples/login",
    pathMatch: "full"
  },
  
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "category",
        component: CategoryComponent
      },
      {
        path: "users",
        component: UserComponent
      },
      {
        path: "produit",
        component: ProduitComponent
      },
       {
        path: "maps",
        loadChildren: "./pages/maps/maps.module#MapsModule"
      },
    

    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "examples",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "examples/login"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
