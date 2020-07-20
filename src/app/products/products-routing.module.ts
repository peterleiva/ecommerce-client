import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  // {
  //   path: 'produtos/:page',
  //   component: ProductsComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'produtos/1'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
