import { JsonApiModel,
  Attribute,
  JsonApiModelConfig,
  HasMany,
  BelongsTo
} from 'angular2-jsonapi';

import { Product } from './product.model';
import Classifier from './classifier.interface';

@JsonApiModelConfig({
  type: 'categories'
})
export class Category extends JsonApiModel implements Classifier {
  @Attribute() name: string;
  @HasMany() products: Product[];
  @BelongsTo() supercategory: Category;
  @HasMany() subcategories: Category[];
}
