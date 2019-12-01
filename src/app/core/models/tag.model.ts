import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';


@JsonApiModelConfig({
  type: 'tags'
})
export class Tag extends JsonApiModel {
  @Attribute() term: string;
}
