import { Component, HostBinding, HostListener, Input, EventEmitter, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  @Input() @HostBinding('class.is-removed') closed: boolean;
  @Output('close') close$: EventEmitter<void>;

  faClose = faTimes;

  constructor() {
    this.close$ = new EventEmitter();
  }

  open() {
    this.closed = false;
  }

  @HostListener('click') close() {
    this.closed = true;
    this.close$.emit();
  }
}
