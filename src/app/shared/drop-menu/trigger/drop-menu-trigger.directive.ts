import { Directive, Input, HostListener } from '@angular/core';

import DropMenu from '../drop-menu.interface';

@Directive({
  selector: '[storeDropMenuTrigger]'
})
export class DropMenuTriggerDirective {
  @Input('storeDropMenuTrigger') dropMenu: DropMenu;

  @HostListener('tap')
  toggle() {
    this.dropMenu.toggle();
  }
}
