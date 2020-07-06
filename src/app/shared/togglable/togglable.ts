import {
  Output,
  EventEmitter,
  Input,
  OnInit
} from '@angular/core';

export abstract class Togglable implements OnInit {
  @Input() checked: boolean;
  @Output() toggleChange: EventEmitter<Togglable> = new EventEmitter();

  ngOnInit() {
    this.toggleChange.emit(this);
  }

  abstract toggle();
}