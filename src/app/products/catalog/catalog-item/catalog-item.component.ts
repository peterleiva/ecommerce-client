import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-catalog-item',
  templateUrl: 'catalog-item.component.html'
})
export class CatalogItemComponent {
  @Input() product: Product;

  addToCart() {

  }

  addToFavorite() {

  }

  openQuickView() {

  }
}
