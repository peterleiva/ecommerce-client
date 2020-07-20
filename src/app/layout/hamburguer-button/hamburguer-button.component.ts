/**
 * This file describe a hamburguer icon
 * @packageDocumentation
 */

import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectionStrategy } from '@angular/core';
import { TweenLite, Bounce } from 'gsap';

/**
 * Hamburguer button component refers to hamburguer menu button
 *
 * The button has two state a inactive (normal) state and a active state. The
 * active state means the hamburguer is present in counterpart the active state
 * a close icon appears instead
 */
@Component({
  selector: 'store-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburguerButtonComponent {
  static TRANSITION_DURATION = .25;

  private activated: boolean;
  @ViewChild('midLine') private _middleLine: ElementRef<SVGLineElement>;
  @ViewChild('cuttedLine') private _topLine: ElementRef<SVGLineElement>;

  private get topLine(): SVGLineElement {
    return this._topLine?.nativeElement;
  }

  private get middleLine(): SVGLineElement {
    return this._middleLine?.nativeElement;
  }

  /**
   * Sets the active state for button
   *
   * The button has a activated state which means a close icon is showed in
   * counterpart a hamburger icon appers is it is inactive
   */
  @Input() set active(value: boolean) {
    this.activated = value;
    this.activated ? this.openAnimation() : this.closeAnimation();
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
}
