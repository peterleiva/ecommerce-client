import { JsonApiModel, Attribute, JsonApiModelConfig, HasMany, BelongsTo } from 'angular2-jsonapi';

import { Product } from './product.model';

@JsonApiModelConfig({
  type: 'categories'
})
export class Category extends JsonApiModel {
  @Attribute() name: string;
  @HasMany() products: Product[];
  @HasMany() subcategories: Category[];
}
