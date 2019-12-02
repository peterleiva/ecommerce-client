import { JsonApiModel, JsonApiModelConfig, Attribute, BelongsTo, HasMany } from 'angular2-jsonapi';

import { Category } from './category.model';
import { Tag } from './tag.model';


@JsonApiModelConfig({
  type: 'products'
})
export class Product extends JsonApiModel {
  @Attribute() title: string;
  @Attribute() netWeight: number;
  @Attribute() price: string;

  @BelongsTo() category: Category;

  // @HasMany() tags: Tag[];
}
