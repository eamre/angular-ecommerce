import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { CategoryAddComponent } from './shop/category-add/category-add.component';
import { ProductAddComponent } from './shop/product-add/product-add.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"",component:ShopComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"category/add",component:CategoryAddComponent},
  {path:"shop",loadChildren:()=>import("./shop/shop.module").then(mod=>mod.ShopModule)},
  // {path:"shop/:id",component:ProductDetailsComponent},
  {path:"account",loadChildren:()=>import("./account/account.module").then(mod=>mod.AccountModule)},
  {path:"**",redirectTo:"",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
