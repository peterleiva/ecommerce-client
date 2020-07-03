import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { gsap, TweenLite, Bounce } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Subject, Subscription, pipe } from 'rxjs';
import { partition, tap } from 'rxjs/operators';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent implements OnDestroy {
  static TRANSITION_DURATION = .25;

  // TODO: Animar hover para os diferentes estados
  // TODO: Desacoplar as animações para abstrações próprias  

  _open: boolean = false;
  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  private open$: Subject<boolean>;
  private openSubscription: Subscription;
  private closeSubscription: Subscription;

  @Input('open') set open(state: boolean) {
    this._open = state;

    if (this.open$)
      this.open$.next(state);
  }

  get open() {
    return this._open;
  }
  
  /**
   * Divide the open/close events into two stream to animate when changed
   */
  ngAfterViewInit() {
    this.open$ = new Subject();

    const [open$, close$] = pipe(
      partition((open: boolean) => open)
    )(this.open$);
    
    this.openSubscription = open$.pipe(tap(_ => this.onOpen.emit()))
                                 .subscribe(this.openAnimation);

    this.closeSubscription = close$.pipe(tap(_ => this.onClose.emit()))
                                   .subscribe(this.closeAnimation);

    if (this.open)
      this.open$.next(this.open);
  }

  /**
   * Animate to two line crossed using absolute position - open state
   */
  private openAnimation(): void {
    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 60,
        y1: 42,
        x2: 90,
        y2: 20
      },
      ease: Bounce.easeOut
    });

    TweenLite.to('.container line',
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
    this.open$.next(this.open);
  }

  /**
   * Unsubscribe to all subscription made in ngOnViewInit
   */
  ngOnDestroy() {
    this.openSubscription.unsubscribe();
    this.closeSubscription.unsubscribe();
  }
}
