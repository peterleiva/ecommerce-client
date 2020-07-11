import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonApiQueryData } from 'angular2-jsonapi';

import { Datastore } from './datastore.service';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';
import { QueryParams } from '../models/query-params.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private datastore: Datastore) { }

  getAll(params: QueryParams = {}): Observable<Category[]> {
    return (
      this.datastore
        .findAll(Category, params)
        .pipe(
          map(
            (categories: JsonApiQueryData<Category>) => categories.getModels()
          )
        )
    );
  }

  /**
   * TODO implementar
   */
  getAllWithProducts(): void {
    throw new Error ('Must be implemented');
  }
}
