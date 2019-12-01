import { JsonApiDatastore, JsonApiDatastoreConfig, DatastoreConfig } from 'angular2-jsonapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category.model';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/api',
  models: {
    categories: Category
  }
};

@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {
  constructor(http: HttpClient) {
    super(http);
  }
}
