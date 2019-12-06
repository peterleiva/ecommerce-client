import { JsonApiModel, JsonApiModelConfig, Attribute, BelongsTo, HasMany } from 'angular2-jsonapi';

import { Category } from './category.model';
import { Tag } from './tag.model';


@JsonApiModelConfig({
  type: 'products'
})
export class Product extends JsonApiModel {
  @Attribute() title: string;
  @Attribute() netWeight: string;
  @Attribute() weight: string;
  @Attribute() price: string;
  @Attribute({serializedName: 'price-cents'}) priceCents: string;

  @BelongsTo() category: Category;

  @HasMany() tags: Tag[];
}
