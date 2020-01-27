export abstract class PageData {
  number: number;
  size: number;
  entries: number;
  totalPages: number;
  totalEntries: number;

  abstract get prev(): number;
  abstract get next(): number;
  abstract get first(): number;
  abstract get last(): number;
  abstract hasNext(): boolean;
  abstract hasPrev(): boolean;
  abstract isFirst(): boolean;
  abstract isLast(): boolean;
  abstract get initialEntry(): number;
  abstract get lastEntry(): number;
}

export interface Paginator {
  paginate: Pagination;
}

export default class Pagination extends PageData {

  get prev(): number {
    return this.hasPrev() ? this.number - 1 : 0;
  }

  get next(): number {
    return this.hasNext() ? this.number + 1 : 0;
  }

  get first(): number {
    return 1;
  }

  get last(): number {
    return this.totalPages
  }

  hasNext(): boolean {
    return this.number >= this.first && this.number < this.last;
  }

  hasPrev(): boolean {
    return this.number > this.first && this.number <= this.last;
  }

  isFirst(): boolean {
    return this.number === this.first;
  }

  isLast(): boolean {
    return this.number === this.last;
  }

  get initialEntry(): number {
    return (this.number - 1) * this.size + 1
  }

  get lastEntry(): number {
    return this.initialEntry + this.entries - 1;
  }

  isOutOfRange(): boolean {
    return this.number < this.first || this.number > this.last;
  }
}
