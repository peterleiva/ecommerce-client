import { NgModule } from '@angular/core';

import {  CatalogComponent } from './catalog/catalog.component';
import {  CatalogItemComponent } from './catalog/catalog-item/catalog-item.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    CatalogComponent,
    CatalogItemComponent
  ],
  exports: [
    CatalogComponent,
    CatalogItemComponent,
  ]
})
export class ProductsWidgetModule { }
