import { Component, OnInit, Input, Output, ViewChild, ElementRef, OnDestroy, AfterViewInit, EventEmitter } from '@angular/core';
import { gsap, TweenLite, TimelineLite, Bounce, TimelineMax } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Subject, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { partition } from 'rxjs/operators';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent {
  static TRANSITION_DURATION = .3;

  @Input() open: boolean = false;
  open$: Observable<boolean>;
  close$: Observable<boolean>;
  toggle$: BehaviorSubject<boolean>;
  openSubscriptions: Subscription;
  closeSubscriptions: Subscription;

  timeline: TimelineLite;

  @ViewChild('icon') _icon: ElementRef<SVGElement>;

  ngOnInit() {
    this.toggle$ = new BehaviorSubject<boolean>(this.open);
    const [open$, close$] = this.toggle$.pipe(partition(open => open));

    console.log('call')

    this.open$ = open$;
    this.close$ = close$;

    this.openSubscriptions = this.open$.subscribe(this._open);
    this.closeSubscriptions = this.close$.subscribe(this._close);
  }

  get icon(): SVGElement {
    return this._icon.nativeElement;
  }

  private _open() {
    console.log('open');
    // open animation
    TweenLite.to('.icon line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 10,
        y1: 20,
        x2: 90,
        y2: 80
      }
    });

    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 60,
        y1: 42,
        x2: 90,
        y2: 20
      }
    });

    // const timeline = new TimelineLite({paused: true});
    // timeline.to('#top-line', .2, {x: -30})
    //   .to('.icon line', .2, {y: 50, ease: Bounce.easeOut})
    //   .add('merge-lines');
    // this.timeline = timeline;
  }

  private _close() {
    console.log('close');
    TweenLite.to('#top-line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 40,
        y1: 25,
        x2: 90,
        y2: 25
      }
    });

    TweenLite.to('.icon line', HamburguerButtonComponent.TRANSITION_DURATION, {
      attr: {
        x1: 10,
        y1: 50,
        x2: 90,
        y2: 50
      }
    });

    // this.timeline = new TimelineMax();
    //
    // this.timeline.to('#top-line', .2, {scaleX: 1.4});
  }

  toggle() {
    this.open = !this.open;
    this.toggle$.next(this.open);
  }

  onMouseEnter() {
    console.log(this.timeline);
  }

  ngOnDestroy() {
    this.openSubscriptions.unsubscribe();
    this.closeSubscriptions.unsubscribe();
  }
}
