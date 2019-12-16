import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Observable } from 'rxjs';

import { Datastore } from './datastore.service';
import { Product } from '../models/product.model';
import Pagination from '../models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private datastore: Datastore) { }

  /**
   *
   */
  getAll(pagination = new Pagination()): Observable<JsonApiQueryData<Product>> {
    return this.datastore.findAll(Product, {
      include: ['category'],
      page: {
        number: pagination.number,
        size: pagination.size
      }
    });
  }
}
