import {
  Component,
  Input,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
  OnInit,
  OnChanges,
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

  // TODO: animação hover
  // @ViewChild('cuttedLine') _cuttedLine: ElementRef<SVGLineElement>;

  _open: boolean = false;
  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();
  open$: Subject<boolean>;
  openSubscription: Subscription;
  closeSubscription: Subscription;

  @Input('open') set open(state: boolean) {
    this._open = state;

    if (this.open$)
      this.open$.next(state);
  }

  get open() {
    return this._open;
  }
  
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
   * Uses gsap to animation to cross state, two line crossed
   *
   */
  private openAnimation(): void {
    // console.log(this.cuttedLine);
    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 60,
        y1: 42,
        x2: 90,
        y2: 20
      },
      ease: Bounce.easeOut
    });

    TweenLite.to('.container line', HamburguerButtonComponent.TRANSITION_DURATION, {
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
   * Uses gsap to animation to its regular shape, default one
   *
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

    TweenLite.to('.container line', HamburguerButtonComponent.TRANSITION_DURATION, {
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
   * Toggle the open state and emits the new open state
   */
  toggle(): void {
    this.open = !this.open;
    this.open$.next(this.open);
  }

  ngOnDestroy() {
    this.openSubscription.unsubscribe();
    this.closeSubscription.unsubscribe();
  }
}
