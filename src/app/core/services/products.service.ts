import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Datastore } from './datastore.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

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
  getAll(): Observable<Product[]> {
    return this.datastore.findAll(Product, {include: ['category']}).pipe(
      map((products: JsonApiQueryData<Product>) => products.getModels())
    );
  }
}
