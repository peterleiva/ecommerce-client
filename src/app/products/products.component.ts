import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/models/product.model';
import Pagination from '../core/models/pagination.model';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  products$: Observable<JsonApiQueryData<Product>>;
  faSpinner = faSpinner;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        const pagination = new Pagination(params.page, 8);
        this.products$ = this.productsService.getAll(pagination);
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
