import { Input, Component } from '@angular/core';
import { faChevronRight, faForward, faBackward, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent {
  @Input() model;
  faFirst = faAngleDoubleLeft;
  faLast = faAngleDoubleRight;
  faPrev = faAngleLeft;
  faNext = faAngleRight;

  prev(): number {
    return this.current() - 1;
  }

  current(): number {
    return this.model.number;
  }

  next(): number {
    return this.current() + 1;
  }

  first(): number {
    return 1;
  }

  last(): number {
    return this.model['total-pages'];
  }

  isLast(): boolean {
    return this.current() === this.last();
  }

  isFirst(): boolean {
    return this.current() === this.first();
  }
}
