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
import { Subscription } from 'rxjs';
import { ToggleButtonDirective } from 'src/app/shared/togglable/toggle-button.directive';

gsap.registerPlugin(Draggable);


// FIXME: SNAP. Em telas pequenas jogar forte para um lado e ficar preso

@Component({
  selector: 'store-app-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements AfterViewInit, OnDestroy {
  static DRAG_ANIMATION_DURATION = .25;
  static SIDEBAR_SNAP_AXIS = 278;

  @ContentChild(ToggleButtonDirective) private button: ToggleButtonDirective;
  private buttonSubscription: Subscription;
  @HostBinding('class.open') private _open: boolean;
  @HostBinding('class.opening') private opening = false;
  @Input() draggable: HTMLElement;

  constructor(private container: ElementRef, private zone: NgZone) { }

  @Input() set open(value: boolean) {
    this.zone.run(async () => {
      if (value) {
        this._open = value;
        this.opening = true;
        await this.openDrawer();
        this.opening = false;
      } else {
        await this.closeDrawer();
        this._open = value;
      }
    });
  }

  private get app(): HTMLDivElement {
    return this.container.nativeElement;
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
  }

  @HostListener('click') private openContainer(): void {
    if (!this.opening && this._open) {
      this.open = false;
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
      this.open = false;
    } else {
      this.open = true;
    }
    this.opening = false;
  }

  private async openDrawer(): Promise<TweenLite> {
    this.button.check();

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
    this.button.uncheck();

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

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }
}
