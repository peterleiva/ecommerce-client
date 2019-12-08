import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  @Input() products: Product[];
  viewMode: string;
}
