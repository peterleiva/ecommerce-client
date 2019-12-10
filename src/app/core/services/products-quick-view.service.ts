import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsQuickViewService {
  private newProduct$: Subject<Product>;

  constructor() {
    this.newProduct$ = new Subject();
  }

  open(product: Product) {
    this.newProduct$.next(product);
  }

  get productQuickView$(): Observable<Product> {
    return this.newProduct$.asObservable();
  }
}
