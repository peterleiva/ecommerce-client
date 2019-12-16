import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonApiQueryData } from 'angular2-jsonapi';

import { Datastore } from './datastore.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private datastore: Datastore) { }

  getAll(): Observable<JsonApiQueryData<Category>> {
    return this.datastore.findAll(Category);
  }

  /**
   * @todo
   */
  getAllWithProducts(): void {

  }
}
