/**
 * This file describe a sidenav trigger directive
 * @packageDocumentation
 */
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { Togglable } from '../../../shared/togglable/togglable';
import Menu from '../menu.interface';

/**
 * Triggers the state of menu interface
 *
 * Menu interface only has open/close methods. The sidenav trigger uses those
 * methods and tracks the current state when it closes/open the menu
 */
@Directive({
  selector: '[storeSidenavTrigger]',
  exportAs: 'storeNavTrigger'
})
export class SidenavTriggerDirective extends Togglable {
  @HostBinding('class.is-clickable')
  @Input('storeSidenavTrigger') sidenav: Menu;

  /**
   * Sets as checked current state and open sidenav
   */
  openNav() {
    this.check();
    this.sidenav.open();
  }

  /**
   * Uncheck the toggle state and close sidenav
   */
  closeNav() {
    this.uncheck();
    this.sidenav.close();
  }

  /**
   * Change the current state to on/off
   *
   * Hostlistener also add a listener to click event to change. Simply
   * detects the current state and change to its counterpart
   */
  @HostListener('click')
  toggle() {
    this.isOn() ? this.closeNav() : this.openNav();
  }
}
