import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemComponent } from './catalog/catalog-item/catalog-item.component';
import { QuickViewComponent } from './quick-view/quick-view.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    CatalogComponent,
    CatalogItemComponent,
    QuickViewComponent
  ],
  exports: [
    CatalogComponent,
    CatalogItemComponent,
    QuickViewComponent
  ]
})
export class ProductsWidgetModule { }
