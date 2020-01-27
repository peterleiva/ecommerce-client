import { JsonApiModel, JsonApiModelConfig, Attribute, BelongsTo, HasMany } from 'angular2-jsonapi';

import { Category } from './category.model';
import { Tag } from './tag.model';
import MetaDataModel from './meta-data.model';


@JsonApiModelConfig({
  type: 'products',
  meta: MetaDataModel
})
export class Product extends JsonApiModel {
  @Attribute() title: string;
  @Attribute({serializedName: 'detail-description'}) detailDescription: string;
  @Attribute({serializedName: 'brief-description'}) briefDescription: string;
  @Attribute({serializedName: 'net-weight'}) netWeight: string;
  @Attribute() weight: string;
  @Attribute({serializedName: 'price'}) price: object;
  @Attribute() cover: string;
  @Attribute() gallery: string[];

  @BelongsTo() category: Category;
  @HasMany() tags: Tag[];
}
