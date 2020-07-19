/**
 * This file is a side navigation list component
 * @packageDocumentation
 */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
  ChangeDetectionStrategy
} from '@angular/core';

import { TimelineMax } from 'gsap';
import { Tree } from 'src/app/shared/data-structure/tree/tree.model';
import NavigationItem from '../../../models/navigation-item.model';
import { SidenavNavigatorService } from '../../services/sidenav-navigator.service';
import { trigger, style, transition, query, stagger, animate, animateChild, state } from '@angular/animations';

/**
 * Side navegation list component
 *
 * Nav list has a array of nav items which use the navigator service to
 * navigate in on of its existent children
 */
@Component({
  selector: 'store-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({transform: 'translateX(-150%)'}),
        animate('200ms', style({opacity: 1, transform: 'translateX(0)'}))
      ])
    ]),
    trigger('navigate', [
      transition('* <=> *', [
        query(':enter', animateChild())
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavListComponent implements AfterViewInit {
  @Input() navList: Tree<NavigationItem>[];
  @ViewChildren('items') private _items: QueryList<ElementRef<HTMLElement>>;
  private timeline: TimelineMax;

  constructor(private container: ElementRef,
              private navNavigator: SidenavNavigatorService) { }
  /**
   * Gets the sidenav list component element for gsap
   */
  get nav(): HTMLElement {
    return this.container.nativeElement;
  }

  /**
   * Gets the sidenav underlying elements for gsap
   */
  get items(): HTMLElement[] {
    // return this._items.toArray().map(item => item.nativeElement);
  }

  ngAfterViewInit() {
    // this._items.changes.subscribe(_ => this.openAnimation());
  }

  ngOnInit() {
    console.log('init sidenav list');
  }

  ngOnChanges(changes) {
    console.log('sidenavlist changed', changes);
  }

  /**
   * Uses the navigator service to navigate into nav item
   */
  navigate(navItem: Tree<NavigationItem>) {
    this.navNavigator.navigate(navItem);
  }

  /**
   * Uses gsap to animate the hiden of old nav items
   */
  private async closeAnimation(): Promise<TimelineMax> {
    this.timeline = new TimelineMax();

    this.timeline
      .set(this.nav, {
        transformOrigin: 'center bottom',
        perspective: 5000,
        transformStyle: 'preserve-3d'
      })
      .add('close')
      .to(this.nav, .2, { rotateX: 90 });

    return this.timeline.then();
  }

  /**
   * Uses gsap to animation when the navigate event happens
   */
  private async openAnimation(): Promise<TimelineMax> {
    return (
      this.timeline
        .set(this.nav, { rotateX: 0 })
        .set(this.items, { x: '-100%', opacity: 0 })

        .to(this.items, .25, {
          x: 0,
          opacity: 1,
          stagger: { amount: .25 }
        })
    );
  }
}
