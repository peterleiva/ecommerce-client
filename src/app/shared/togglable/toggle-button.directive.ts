import { Directive, HostListener, OnInit } from '@angular/core';
import { TogglableDirective } from './togglable.directive';

@Directive({
  selector: '[appToggleButton]'
})
export class ToggleButtonDirective extends TogglableDirective {

  @HostListener('click') toggle() {
    this.checked = !this.checked;
    this.toggleChange.emit(this);
  }
}
