import {
  Output,
  EventEmitter,
  Input,
  OnInit
} from '@angular/core';
import { Togglable } from './togglable.interface';

export abstract class TogglableDirective implements OnInit, Togglable {
  @Input() checked: boolean;
  @Output() toggleChange: EventEmitter<Togglable> = new EventEmitter();

  ngOnInit() {
    this.toggleChange.emit(this);
  }

  abstract toggle();
}