import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { gsap, TweenLite, Power1, Back } from 'gsap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { CategoryNavigatorService } from './category-navigator.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'store-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav/sidenav-loading.component.scss'
  ],
  providers: [CategoryNavigatorService],
  animations: [
    trigger('slideRight', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(-100%)' })),

      transition('hide => show', [
        animate('300ms 250ms cubic-bezier(.01, .51, .18, 1.31)')
      ])
    ]),

    trigger('slideDown', [
      state('show', style({ transform: 'translateY(0)' })),
      state('hide', style({ transform: 'translateY(-200%)' })),

      transition('hide => show', [
        animate('150ms 100ms cubic-bezier(.01, .051, .18, 1.31)')
      ])
    ])
  ]
})
export class SidenavDrawerComponent implements AfterViewInit {
  backButton = faChevronLeft;
  @Input() show: boolean;

  constructor(private navigatorService: CategoryNavigatorService) { }

  get categories$(): Observable<Category[]> {
    return this.navigatorService.categories$;
  }

  get navigator$(): Observable<Category> {
    return this.navigatorService.navigate$;
  }

  get state(): string {
    return this.show ? 'show' : 'hide';
  }

  close(): void {
    this.navigatorService.close();
  }

  ngAfterViewInit() {
    TweenLite.from('.loading', 2, {
      scaleX: .65,
      opacity: 1,
      transformOrigin: 'left',
      ease: Power1.easeInOut,
      stagger: {
        repeat: -1,
        yoyo: true,
        each: 1,
        from: 'random'
      }
    });
  }
}
