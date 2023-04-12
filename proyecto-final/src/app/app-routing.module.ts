import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsGalleryComponent } from './products-gallery/products-gallery.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsGalleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
