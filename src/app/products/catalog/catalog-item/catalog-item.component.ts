import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { faExpandArrowsAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-catalog-item',
  templateUrl: 'catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product: Product;
  faExpand = faExpandArrowsAlt;
  faShoppingCart = faShoppingCart;


  addToCart() {
    console.log('add to shopping cart');
  }

  addToFavorite() {
    console.log('add to favorite');
  }

  openQuickView() {
    console.log('open quick view');
  }
}
