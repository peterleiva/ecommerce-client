import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { gsap, TweenLite, Back, Bounce } from 'gsap';
import { Draggable } from 'gsap/draggable';

// FIXME: Mudar posição de snap. Em telas pequenas jogar forte para um lado e ficar preso

gsap.registerPlugin(Draggable);

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements AfterViewInit {
  static SIDEBAR_SNAP_AXIS = 278;
  static DRAG_ANIMATION_DURATION = .3;

  @ViewChild('app') _app: ElementRef<HTMLDivElement>;
  @ViewChild('drawerTrigger') _drawerTrigger: ElementRef<HTMLDivElement>;
  drawer = false;
  opening = false;

  get drawerTrigger() {
    return this._drawerTrigger.nativeElement;
  }

  ngAfterViewInit() {
    Draggable.create(this.app, {
      edgeResistance: 0,
      trigger: this.drawerTrigger,
      type: 'x',
      inertia: true,
      onDragStart: () => this.onDragStart(),
      onDragEnd: () => this.onDragEnd()
    });
  }

  private onDragStart(): void {
    this.opening = true;

    TweenLite.to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
      rotation: 1,
      scale: .84,
      transformOrigin: 'left',
      ease: Back.easeOut
    });
  }

  private onDragEnd(): void {
    this.opening = false;

    const closeDistance = this.app.getBoundingClientRect().left;

    if (closeDistance < CoreComponent.SIDEBAR_SNAP_AXIS) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    this.drawer = true;
    TweenLite
      .to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
        x: CoreComponent.SIDEBAR_SNAP_AXIS,
        rotation: 0,
        scale: .84,
        ease: Back.easeOut
      });
  }

  closeDrawer() {
    this.drawer = false;
    TweenLite
      .to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
        x: 0,
        rotation: 0,
        scale: 1,
        ease: Bounce.easeOut
      });
  }

  get app(): HTMLDivElement {
    return this._app.nativeElement;
  }
}
