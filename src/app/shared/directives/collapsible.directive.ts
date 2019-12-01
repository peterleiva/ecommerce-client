import { Directive, HostBinding, Input } from '@angular/core';

import Collapsible from '../interfaces/collapsible.interface';

@Directive({
  selector: '[appCollapsible]'
})
export class CollapsibleDirective implements Collapsible {
  @Input('appCollapsible')
  @HostBinding('class.is-removed') collapsed = true;

  get expanded() {
    return !this.collapsed;
  }

  collapse() {
    this.collapsed = true;
  }

  expand() {
    this.collapsed = false;
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

}
