import {
  Output,
  EventEmitter,
  Input
} from '@angular/core';

export abstract class Togglable {
  @Input() checked: boolean;
  @Output() toggleChange: EventEmitter<Togglable>;

  constructor() {
    this.toggleChange = new EventEmitter();
  }

  check() {
    this.checked = true;
    this.toggleChange.emit(this);
  }

  uncheck() {
    this.checked = false;
    this.toggleChange.emit(this);
  }

  abstract toggle();
}