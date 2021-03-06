import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

export enum ViewMode {
  GRID = 'grid',
  LIST = 'list'
}

@Component({
  selector: 'app-products-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  @Input() products: Product[];
  @Input() view = ViewMode.GRID;
  overlay = {
    closed: true,
    product: null
  };

  openQuickView(product: Product) {
    this.overlay.closed = false;
    this.overlay.product = product;
  }
}
