import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  AfterViewInit,
  OnDestroy,
  HostListener,
  NgZone} from '@angular/core';
import { gsap, TweenLite, Back, Bounce } from 'gsap';
import { Draggable } from 'gsap/draggable';

import Menu from 'src/app/layout/sidenav/menu.interface';
import { SidenavTriggerDirective } from 'src/app/layout/sidenav/sidenav-trigger/sidenav-trigger.directive';

gsap.registerPlugin(Draggable);


// FIXME: SNAP. Em telas pequenas jogar forte para um lado e ficar preso

@Component({
  selector: 'store-app-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./app-container.component.scss'],
  exportAs: 'storeMenu'
})
export class AppContainerComponent implements AfterViewInit, Menu {
  static DRAG_ANIMATION_DURATION = .25;
  static SIDEBAR_SNAP_AXIS = 278;

  @HostBinding('class.open') @Input() opened: boolean;
  @HostBinding('class.opening') private opening = false;
  @Input() draggable: HTMLElement;
  @ContentChild(SidenavTriggerDirective) trigger: SidenavTriggerDirective;

  constructor(private container: ElementRef, private zone: NgZone) { }

  private get app(): HTMLDivElement {
    return this.container.nativeElement;
  }

  /**
   *
   */
  open(): AppContainerComponent {
    this.zone.run(async () => {
      this.opening = true;
      await this.openDrawer();
      this.opening = false;

      this.opened = true;
    });

    return this;
  }

  /**
   *
   */
  close(): AppContainerComponent {
    this.zone.run(async () => {
      await this.closeDrawer();
      this.opened = false;
    });

    return this;
  }

  ngAfterViewInit() {
    Draggable.create(this.app, {
      edgeResistance: 0,
      trigger: this.draggable,
      type: 'x',
      inertia: true,
      onDragStart: () => this.onDragStart(),
      onDragEnd: () => this.onDragEnd()
    });

    this.opened ? this.open() : this.close();
  }

  @HostListener('click') private closeContainer(): void {
    if (!this.opening && this.opened) {
      this.trigger.closeNav();
    }
  }

  private onDragStart(): void {
    this.opening = true;

    TweenLite.to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
      rotation: 1,
      scale: .84,
      transformOrigin: 'left',
      ease: Back.easeOut
    });
  }

  private async onDragEnd(): Promise<void> {
    const closeDistance = this.app.getBoundingClientRect().left;

    if (closeDistance < AppContainerComponent.SIDEBAR_SNAP_AXIS) {
      this.trigger.closeNav();
    } else {
      this.trigger.openNav();
    }
    this.opening = false;
  }

  private async openDrawer(): Promise<TweenLite> {
    return (
      TweenLite
        .to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
          x: AppContainerComponent.SIDEBAR_SNAP_AXIS,
          rotation: 0,
          scale: .84,
          ease: Back.easeOut
        })
    );
  }

  private async closeDrawer(): Promise<TweenLite> {
    return (
      TweenLite
        .to(this.app, AppContainerComponent.DRAG_ANIMATION_DURATION, {
          x: 0,
          rotation: 0,
          scale: 1,
          ease: Bounce.easeOut
        })
    );
  }
}
