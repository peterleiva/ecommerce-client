import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany } from 'angular2-jsonapi';

import { Category } from './category.model';
import Classifier from './classifier.interface';


@JsonApiModelConfig({
  type: 'departments'
})
export class Department extends JsonApiModel implements Classifier {
  @Attribute() name: String;
  @HasMany() categories: Category[];

  get subclassifier(): Category[] {
    return this.categories;
  }

  get subcategories(): Category[] {
    return this.categories;
  }
}
