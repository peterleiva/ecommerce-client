import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
})
export class QuickViewComponent {
  @Input() product: Product;
}
