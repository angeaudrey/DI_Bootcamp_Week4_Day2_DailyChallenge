import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'details/product', component: DetailsproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
