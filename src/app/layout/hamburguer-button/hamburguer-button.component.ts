import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit } from '@angular/core';
import { TweenLite, Bounce } from 'gsap';
import { Subscription } from 'rxjs';

import { ToggleButtonDirective } from 'src/app/shared/togglable/toggle-button.directive';

@Component({
  selector: 'store-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent extends ToggleButtonDirective
  implements AfterViewInit, OnDestroy {

  static TRANSITION_DURATION = .25;

  @ViewChild('midLine') private _middleLine: ElementRef<SVGLineElement>;
  private toggleSubscription: Subscription;
  @ViewChild('cuttedLine') private _topLine: ElementRef<SVGLineElement>;

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
    this.toggleSubscription = this.toggleChange.subscribe(
       async () => {
         this.checked ? this.open() : this.close();
       }
    );
  }

  open() {
    super.open();
    this.openAnimation();
  }

  close() {
    super.close();
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
