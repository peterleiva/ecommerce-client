import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faExpandArrowsAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-catalog-item',
  templateUrl: 'catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product: Product;
  @Output() expand = new EventEmitter<Product>();
  faExpand = faExpandArrowsAlt;
  faShoppingCart = faShoppingCart;

  addToCart() {
    console.log('add to shopping cart');
  }

  addToFavorite() {
    console.log('add to favorite');
  }

  openQuickView() {
    this.expand.emit(this.product);
  }
}
