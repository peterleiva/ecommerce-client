import { Attribute, JsonApiMetaModel } from 'angular2-jsonapi';

export default class MetaDataModel extends JsonApiMetaModel {
  meta: {pagination: PaginationMetaModel};
}

export class PaginationMetaModel {
  number: number;
  size: number;
  entries: number;
  totalPages: number;
  totalEntries: number;
}
