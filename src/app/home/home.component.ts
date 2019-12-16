import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../core/models/product.model';
import { ProductsService } from '../core/services/products.service';
import { map } from 'rxjs/operators';
import { CategoriesService } from '../core/services/categories.service';
import { Category } from '../core/models/category.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faSpinner = faSpinner;
  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.products$ = this.productsService.getAll().pipe(
      map(product => product.getModels())
    );

    this.categories$ = this.categoriesService.getAll().pipe(
      map(categories => categories.getModels())
    );
  }
}
