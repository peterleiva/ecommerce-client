import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsWidgetModule } from './products-widget.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    ProductsWidgetModule
  ],
  exports: [
    ProductsWidgetModule
  ]
})
export class ProductsModule { }
