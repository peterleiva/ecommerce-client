import { Directive, HostListener, HostBinding } from '@angular/core';
import { Togglable } from './togglable';

@Directive({
  selector: '[storeToggleButton]'
})
export class ToggleButtonDirective extends Togglable {
  @HostBinding('class.is-clickable') clicklable = true;

  open() {
    this.check();
  }

  close() {
    this.uncheck();
  }

  @HostListener('click') toggle() {
    this.checked = !this.checked;
    this.toggled.emit(this);
  }
}
