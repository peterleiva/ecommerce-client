import { Component, Input } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';
import Pagination, { Paginator } from 'src/app/core/models/pagination.model';

@Component({
  selector: 'app-page-entries-info',
  templateUrl: './page-entries-info.component.html'
})
export class PageEntriesInfoComponent implements Paginator {
  @Input() model: JsonApiQueryData<any>;

  get paginate(): Pagination {
    return this.model.getMeta().meta.paginate;
  }
}
