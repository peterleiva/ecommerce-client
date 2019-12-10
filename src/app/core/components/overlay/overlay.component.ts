import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  @Input() @HostBinding('class.is-removed') closed: boolean;
  faClose = faTimes;

  open() {
    this.closed = false;
  }

  @HostListener('click') close() {
    this.closed = true;
  }
}
