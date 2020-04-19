import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany } from 'angular2-jsonapi';

import { Category } from './category.model';


@JsonApiModelConfig({
  type: 'departments'
})
export class Department extends JsonApiModel {
  @Attribute() name: String;
  @HasMany() categories: Category[];
}
