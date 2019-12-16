import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsWidgetModule } from './products-widget.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    ProductsWidgetModule
  ],
  exports: [
    ProductsWidgetModule
  ]
})
export class ProductsModule { }
