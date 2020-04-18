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
  static SIDEBAR_SNAP_AXIS = 280;
  static DRAG_ANIMATION_DURATION = .3;

  @ViewChild('app') _app: ElementRef<HTMLDivElement>;
  drawer = false;

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
    gsap.set(this.app, { className: '+=open' });

    TweenLite.to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
      rotation: 1,
      scale: .84,
      transformOrigin: 'left',
      ease: Back.easeOut
    });
  }

  private onDragEnd(): void {
    const closeDistance = this.app.getBoundingClientRect().left;
    const third = this.app.offsetWidth * .3;

    if (closeDistance < Math.min(third, CoreComponent.SIDEBAR_SNAP_AXIS)) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    TweenLite
      .to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
        x: CoreComponent.SIDEBAR_SNAP_AXIS,
        rotation: 0,
        scale: .84,
        ease: Back.easeOut,
        onComplete: () => this.drawer = true
      });
  }

  closeDrawer() {
    if (this.drawer) {
      TweenLite
        .to(this.app, CoreComponent.DRAG_ANIMATION_DURATION, {
          x: 0,
          rotation: 0,
          scale: 1,
          ease: Bounce.easeOut,
          onComplete: () => this.drawer = false
        });
    }
  }

  get app(): HTMLDivElement {
    return this._app.nativeElement;
  }
}
