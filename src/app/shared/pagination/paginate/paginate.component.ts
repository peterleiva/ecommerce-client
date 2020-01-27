import { Input, Component } from '@angular/core';
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { JsonApiQueryData } from 'angular2-jsonapi';

import Pagination, { Paginator } from 'src/app/core/models/pagination.model';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements Paginator {
  @Input() model: JsonApiQueryData<any>;
  faFirst = faAngleDoubleLeft;
  faLast = faAngleDoubleRight;
  faPrev = faAngleLeft;
  faNext = faAngleRight;


  get paginate(): Pagination {
    return this.model.getMeta().meta.paginate;
  }
}
