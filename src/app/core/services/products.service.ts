import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Observable } from 'rxjs';

import { Datastore } from './datastore.service';
import { Product } from '../models/product.model';
import { QueryParams } from '../models/query-params.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private datastore: Datastore) { }

  /**
   * Returns all filtered products defined by its optional query params
   */
  getAll(params?: QueryParams): Observable<JsonApiQueryData<Product>> {
    return this.datastore.findAll(Product, params);
  }
}
