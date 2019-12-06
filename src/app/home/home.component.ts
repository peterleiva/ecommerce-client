import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../core/models/product.model';
import { ProductsService } from '../core/services/products.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faSpinner = faSpinner;
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getAll();
  }
}
