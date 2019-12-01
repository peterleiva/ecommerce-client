import { JsonApiDatastore, JsonApiDatastoreConfig, DatastoreConfig } from 'angular2-jsonapi';
import { HttpClient } from '@angular/common/http';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:3000/api/'
};

@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {
  constructor(http: HttpClient) {
    super(http);
  }
}
