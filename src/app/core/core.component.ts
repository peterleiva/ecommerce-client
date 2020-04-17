import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { gsap, TweenLite, Back, Bounce } from 'gsap';
import { Draggable } from 'gsap/draggable';

gsap.registerPlugin(Draggable);

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements AfterViewInit {
  static SIDEBAR_SNAP_AXIS = 200;
  static DRAG_ANIMATION_DURATION = .3;

  @ViewChild('sidenav') _sidenav: ElementRef;
  @ViewChild('app') _app: ElementRef<HTMLDivElement>;
  openDrawer = false;

  ngAfterViewInit() {
    Draggable.create(this.app, {
      edgeResistance: 0,
      trigger: '.touchable',
      type: 'x',
      inertia: true,
      onDragStart: () => this.onDragStart(),
      onDragEnd: () => this.onDragEnd()
    });
  }

  private onDragStart(): void {
    TweenLite.to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
      rotation: 1,
      scale: .9,
      transformOrigin: 'left',
      ease: Back.easeOut,
      onComplete: () => this.openDrawer = true
    });
  }

  private onDragEnd(): void {
    const closeDistance = this.app.getBoundingClientRect().left;

    if (closeDistance < CoreComponent.SIDEBAR_SNAP_AXIS) {
      this.closeDrawer();
    } else {
      TweenLite
        .to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
          x: CoreComponent.SIDEBAR_SNAP_AXIS
        });
    }
  }

  closeDrawer() {
    if (this.openDrawer) {
      TweenLite.to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
        rotation: 0,
        scale: 1,
        x: 0,
        ease: Bounce.easeOut,
        onComplete: () => this.openDrawer = false
      });
    }
  }

  get sidenav() {
    return this._sidenav.nativeElement;
  }

  get app(): HTMLDivElement {
    return this._app.nativeElement;
  }
}
