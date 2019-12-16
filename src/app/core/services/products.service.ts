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
   * @todo
   */
  // getbyCategory(category: Category): Observable<Product[]> {
  //   return ;
  // }
  //
  // /**
  //  *
  //  * @todo
  //  */
  // getFeatured(): Observable<Product[]> {
  //   return null;
  //
  // }
  //
  // /**
  //  * @todo
  //  */
  // getRandom(): Observable<Product[]> {
  //   return null;
  //
  // }
  //
  // /**
  //  * @todo
  //  */
  // getNewArrivals(): Observable<Product[]> {
  //   return null;
  //
  // }

  /**
   * @todo
   */
  getAll(pagination = new Pagination()): Observable<JsonApiQueryData<Product>> {
    console.log(pagination);
    return this.datastore.findAll(Product, {
      include: ['category'],
      page: {
        number: pagination.number,
        size: pagination.size
      }
    });
  }
}
