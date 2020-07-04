import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener } from '@angular/core';
import { gsap, TweenLite, Bounce } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Subscription } from 'rxjs';

import HoverEffect from './hover-effect/hover-effect.abstract';
import CrossLineEffect from './hover-effect/cross-line-effect';
import StackLineEffect from './hover-effect/stack-line-effect';
import { ToggleButtonDirective } from 'src/app/shared/togglable/toggle-button.directive';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent extends ToggleButtonDirective
  implements AfterViewInit, OnDestroy {

  static TRANSITION_DURATION = .25;

  // TODO: Animar hover para os diferentes estados
  // TODO: Desacoplar as animações para abstrações próprias

  @ViewChild('icon') private _icon: ElementRef<SVGElement>;
  @ViewChild('cuttedLine') private _topLine: ElementRef<SVGLineElement>;
  @ViewChild('midLine') private _middleLine: ElementRef<SVGLineElement>;
  private hoverAnimate: HoverEffect;
  private toggleSubscription: Subscription;

  private get icon(): SVGElement {
    return this._icon.nativeElement;
  }

  private get topLine(): SVGLineElement {
    return this._topLine.nativeElement;
  }

  private get middleLine(): SVGLineElement {
    return this._middleLine.nativeElement;
  }

  /**
   * Define the open/close algorithm to the button according to current
   *  togglable state
   */
  ngAfterViewInit() {
    this.hoverAnimate = new StackLineEffect(this.icon);

    this.toggleSubscription = this.toggleChange.subscribe(
       async () => {
         this.checked ? this.open() : this.close();
       }
    );
  }

  @HostListener('mouseover') hover() {
    console.log('mouse over');
    // this.hoverAnimate.hover();
  }

  @HostListener('mouseleave') hoverOut() {
    console.log('mouse leave');
    // this.hoverAnimate.hoverOut();
  }

  open() {
    this.checked = true;
    this.hoverAnimate = new CrossLineEffect(this.icon);
    this.openAnimation();
  }

  close() {
    this.checked = false;
    this.hoverAnimate = new StackLineEffect(this.icon);
    this.closeAnimation();
  }

  /**
   * Animate to two line crossed using absolute position - open state
   */
  private openAnimation(): void {
    TweenLite.to(this.topLine, HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 60,
        y1: 42,
        x2: 90,
        y2: 20
      },
      ease: Bounce.easeOut
    });

    TweenLite.to(this.middleLine,
      HamburguerButtonComponent.TRANSITION_DURATION, {
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
    TweenLite.to(this.topLine, HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 40,
        y1: 25,
        x2: 90,
        y2: 25
      },
      ease: Bounce.easeOut
    });

    TweenLite.to(this.middleLine,
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

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }
}
