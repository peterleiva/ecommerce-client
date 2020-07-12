import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit } from '@angular/core';
import { TweenLite, Bounce } from 'gsap';
import { Subscription } from 'rxjs';

import { Togglable } from 'src/app/shared/togglable/togglable';

@Component({
  selector: 'store-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent extends Togglable {

  static TRANSITION_DURATION = .25;

  @ViewChild('midLine') private _middleLine: ElementRef<SVGLineElement>;
  @ViewChild('cuttedLine') private _topLine: ElementRef<SVGLineElement>;

  private get topLine(): SVGLineElement {
    return this._topLine.nativeElement;
  }

  private get middleLine(): SVGLineElement {
    return this._middleLine.nativeElement;
  }

  check() {
    super.check();
    this.open();
  }

  uncheck() {
    super.uncheck();
    this.close();
  }

  /**
   * Animate to two line crossed using absolute position - open state
   */
  private open(): void {
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
  private close(): void {
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

  toggle() {
    this.checked ? this.open() : this.close();
  }
}
