import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input} from '@angular/core';
import { TweenLite, Bounce } from 'gsap';

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
    return this._topLine?.nativeElement;
  }

  private get middleLine(): SVGLineElement {
    return this._middleLine?.nativeElement;
  }

  @Input() set open(value: boolean) {
    super.checked = value;
    this.toggle();
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

  toggle() {
    this.checked ? this.openAnimation() : this.closeAnimation();
  }
}
