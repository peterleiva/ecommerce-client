/**
 * This file describe a the whole app container
 * @packageDocumentation
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/draggable';

import Menu from 'src/app/layout/sidenav/menu.interface';
import { SidenavTriggerDirective } from 'src/app/layout/sidenav/sidenav-trigger/sidenav-trigger.directive';

gsap.registerPlugin(Draggable);

// FIXME: SNAP. Em telas pequenas jogar forte para um lado e ficar preso

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
export class AppContainerComponent implements AfterViewInit, Menu {
  static DRAG_ANIMATION_DURATION = .25;
  static SIDEBAR_SNAP_AXIS = 278;

  @HostBinding('class.open') @Input() opened: boolean;
  @HostBinding('class.opening') opening;
  @Input() draggable: HTMLElement;
  @Input() trigger: SidenavTriggerDirective;

  constructor(private container: ViewContainerRef) { }

  private get app(): HTMLDivElement {
    return this.container.element.nativeElement;
  }

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

  ngAfterViewInit() {
    // Draggable.create(this.app, {
    //   edgeResistance: 0,
    //   trigger: this.draggable,
    //   type: 'x',
    //   inertia: true,
    //   onDragStart: () => this.opening = true,
    //   onDragEnd: () => this.onDragEnd()
    // });
  }

  private onDragStart(): void {
    this.opening = true;

    // TweenLite.to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
    //   rotation: 1,
    //   scale: .84,
    //   transformOrigin: 'left',
    //   ease: Back.easeOut
    // });
  }

  private async onDragEnd(): Promise<void> {
    const closeDistance = this.app.getBoundingClientRect().left;

    if (closeDistance < AppContainerComponent.SIDEBAR_SNAP_AXIS) {
      this.open();
    } else {
      this.close();
    }
    this.opening = false;
  }
}
