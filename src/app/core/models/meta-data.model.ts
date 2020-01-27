import { JsonApiMetaModel } from 'angular2-jsonapi';
import Pagination, { PageData } from './pagination.model';


interface MetaData {
  paginate: PageData;
}

export default class MetaDataModel extends JsonApiMetaModel {
  meta: MetaData;

  constructor(response: any) {
    super(response);
    this.meta = response.meta
    const pagination = new Pagination();
    pagination.number = response.meta.paginate.number;
    pagination.size = response.meta.paginate.size;
    pagination.entries = response.meta.paginate.entries;
    pagination.totalEntries = response.meta.paginate['total-entries'];
    pagination.totalPages = response.meta.paginate['total-pages'];

    this.meta.paginate = pagination;
  }
}
