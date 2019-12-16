import { PaginationMetaModel } from './meta-data.model';

export default class Pagination extends PaginationMetaModel {

  constructor(public number = 1, public size = 8) {
    super();
  }

  hasPrev(): boolean {
    return !this.isFirst();
  }

  hasNext(): boolean {
    // verificar se só tem uma página talvez
    return !this.isLast();
  }

  isFirst(): boolean {
    return this.number === 1;
  }

  isLast(): boolean {
    return this.number === this.totalPages;
  }

  prev(): number {
    return (this.number - 1) >= 1 ? this.number - 1 : 0;
  }

  initialPageResult(): number {
    return 0;
  }

  finalPageResult(): number {
    return 0;
  }
}
