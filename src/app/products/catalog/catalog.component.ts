import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  @Input() products: Product[];
  viewMode: string;
}
