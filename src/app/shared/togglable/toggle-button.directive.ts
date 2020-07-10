import { Directive, HostListener } from '@angular/core';
import { Togglable } from './togglable';

@Directive({
  selector: '[storeToggleButton]'
})
export class ToggleButtonDirective extends Togglable {

  open() {
    this.checked = true;
  }

  close() {
    this.checked = false;
  }

  @HostListener('click') toggle() {
    this.checked = !this.checked;
    this.toggleChange.emit(this);
  }
}
