import {
  Output,
  EventEmitter,
  Input,
  OnInit
} from '@angular/core';

export abstract class TogglableDirective implements OnInit {
  @Input() checked: boolean;
  @Output() toggleChange: EventEmitter<TogglableDirective> = new EventEmitter();

  ngOnInit() {
    this.toggleChange.emit(this);
  }

  abstract toggle();
}