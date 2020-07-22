/**
 * This file describe a drop menu structural directive
 * @packageDocumentation
 */

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

import DropMenu from './drop-menu.interface';
import { Togglable } from '../togglable/togglable';

@Directive({
  selector: '[storeDropMenu]',
  exportAs: 'storeDropMenu'
})
export class DropMenuDirective extends Togglable implements DropMenu {
  private dropped = false;

  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
    super();
  }

  @Input()
  /**
   * Everytime the structural directive is set a value the underlying template
   * is removed or inserted
   */
  set storeDropMenu(dropped: boolean) {
    dropped ? this.show() : this.hide();
  }


  /**
   * Change the drop menu current visibility
   */
  toggle(): void {
    this.storeDropMenu = this.dropped ? false : true;
  }

  /**
   * Make the component visible
   *
   * Uses the view container to create the view with the template. So, the
   * underlying element is reinserted to the DOM
   */
  show(): void {
    if (!this.dropped) {
      this.viewContainer.createEmbeddedView(this.template);
      this.dropped = true;
    }
  }

  /**
   * Make drop menu hidden
   *
   * Completely remove the underlying template using view container and sets the
   * dropped status as false. The Viewcontainer removes the element from DOM
   */
  hide(): void {
    if (this.dropped) {
      this.viewContainer.clear();
      this.dropped = false;
    }
  }

}
