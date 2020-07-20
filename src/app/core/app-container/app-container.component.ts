/**
 * This file describe a the whole app container
 * @packageDocumentation
 */

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core';

import Menu from 'src/app/layout/sidenav/menu.interface';

/**
 * Container for whole application containing srink animation logic when open
 */
@Component({
  selector: 'store-app-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./app-container.component.scss'],
  exportAs: 'storeMenu',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppContainerComponent implements Menu {
  static DRAG_ANIMATION_DURATION = .25;
  static SIDEBAR_SNAP_AXIS = 278;

  @HostBinding('class.open') @Input() opened: boolean;

  constructor(private container: ViewContainerRef) { }

  /**
   * Sets the current state as opened
   */
  open(): AppContainerComponent {
    this.opened = true;

    return this;
  }

  /**
   * Sets the current state as closed
   */
  close(): AppContainerComponent {
    this.opened = false;

    return this;
  }
}
