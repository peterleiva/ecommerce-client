import { Component, Input } from '@angular/core';
import { faExpandArrowsAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Product } from 'src/app/core/models/product.model';
import { ProductsQuickViewService } from 'src/app/core/services/products-quick-view.service';

@Component({
  selector: 'app-products-catalog-item',
  templateUrl: 'catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() product: Product;
  faExpand = faExpandArrowsAlt;
  faShoppingCart = faShoppingCart;

  constructor(private quickViewService: ProductsQuickViewService) {}

  addToCart() {
    console.log('add to shopping cart');
  }

  addToFavorite() {
    console.log('add to favorite');
  }

  openQuickView() {
    this.quickViewService.open(this.product);
  }
}
