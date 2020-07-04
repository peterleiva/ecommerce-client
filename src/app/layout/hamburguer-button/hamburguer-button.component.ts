import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener } from '@angular/core';
import { gsap, TweenLite, Bounce } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Subject, Subscription, pipe } from 'rxjs';
import { partition, tap } from 'rxjs/operators';

import HoverEffect from './hover-effect/hover-effect.abstract';
import CrossLineEffect from './hover-effect/cross-line-effect';
import StackLineEffect from './hover-effect/stack-line-effect';
import { TogglableDirective } from 'src/app/shared/directives/togglable.directive';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent extends TogglableDirective
  implements AfterViewInit, OnDestroy {

  static TRANSITION_DURATION = .25;

  // TODO: Animar hover para os diferentes estados
  // TODO: Desacoplar as animações para abstrações próprias

  _open: boolean = false;
  @Output('onOpen') onOpen = new EventEmitter<void>();
  @Output('onClose') onClose = new EventEmitter<void>();
  @ViewChild('icon') private _icon: ElementRef<SVGElement>;

  private openSubscription: Subscription;
  private closeSubscription: Subscription;
  hoverAnimate: HoverEffect;

  get icon(): SVGElement {
    return this._icon.nativeElement;
  }

  /**
   * Divide the open/close events into two stream to animate when changed
   */
  ngAfterViewInit() {
    this.hoverAnimate = new StackLineEffect(this.icon);

    const [open$, close$] = pipe(
      partition((open: boolean) => open)
    )(this.change$);

    this.openSubscription = open$.pipe(
      tap(_ => this.onOpen.emit()),
      tap(_ => this.hoverAnimate = new CrossLineEffect(this.icon))
    )
    .subscribe(this.openAnimation);

    this.closeSubscription = close$.pipe(
      tap(_ => this.onClose.emit()),
      tap(_ => this.hoverAnimate = new StackLineEffect(this.icon))
    )
    .subscribe(this.closeAnimation);

    if (this.open) {
      this.change$.next(this.open);
    }
  }

  @HostListener('mouseenter') hover() {
    console.log('mouse enter');

    this.hoverAnimate.hover();
  }

  @HostListener('mouseleave') hoverOut() {
    console.log('mouse leave');
    this.hoverAnimate.hoverOut();
  }

  /**
   * Animate to two line crossed using absolute position - open state
   */
  private openAnimation(): void {
    console.log('open animation');
    
    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 60,
        y1: 42,
        x2: 90,
        y2: 20
      },
      ease: Bounce.easeOut
    });

    TweenLite.to('.container line', .35, {
        attr: {
          x1: 10,
          y1: 20,
          x2: 90,
          y2: 80
        },
      ease: Bounce.easeOut
    });
  }

  /**
   * Animate to three stacked line using absolute position - close (default)
   *  state
   */
  private closeAnimation(): void {
    console.log('close animation');
    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 40,
        y1: 25,
        x2: 90,
        y2: 25
      },
      ease: Bounce.easeOut
    });

    TweenLite.to('.container line',
      HamburguerButtonComponent.TRANSITION_DURATION, {
        attr: {
          x1: 10,
          y1: 50,
          x2: 90,
          y2: 50
        },
        ease: Bounce.easeOut
    });
  }

  /**
   * Toggle the current state and emits the new open/close state
   */
  toggle(): void {
    this.open = !this.open;
    this.change$.next(this.open);
  }

  /**
   * Unsubscribe to all subscription made in ngOnViewInit
   */
  ngOnDestroy() {
    this.openSubscription.unsubscribe();
    this.closeSubscription.unsubscribe();
  }
}
