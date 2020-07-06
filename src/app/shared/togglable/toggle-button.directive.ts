import { Directive, HostListener } from '@angular/core';
import { Togglable } from './togglable';

@Directive({
  selector: '[appToggleButton]'
})
export class ToggleButtonDirective extends Togglable {

  @HostListener('click') toggle() {
    this.checked = !this.checked;
    this.toggleChange.emit(this);
  }
}
