/**
 * This file has a side navigation drawer component
 * @packageDocumentation
 */

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Power1, TweenLite } from 'gsap';
import { Observable } from 'rxjs';

import { Tree } from 'src/app/shared/data-structure/tree/tree.model';
import NavigationItem from '../../models/navigation-item.model';
import { SidenavNavigatorService } from '../services/sidenav-navigator.service';

/**
 * Side navigation drawer component represents a nav container with many other
 * components including a sidenav
 *
 * Sidenav drawer is a container between sidenav list component and others
 * items, keeping track of navigability with navigator service. It also
 * mantain two animatable visilibity state, so it knows when it is visible or
 * not. The navigator interface can navigate through the parent if there's one
 * for the drawer and the sidenav list can navigate between its children.
 * Side navigation drawer just keep is a common place to keep the current
 * selected sidenav tree item
 */
@Component({
  selector: 'store-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav-list/sidenav-loading.component.scss'
  ],
  providers: [SidenavNavigatorService],
  animations: [
    trigger('slideRight', [
      state('1', style({ transform: 'translateX(0)' })),
      state('0', style({ transform: '*' })),

      transition('0 => 1', [
        animate('400ms 100ms cubic-bezier(0.34, 1.56, 0.64, 1)')
      ])
    ]),

    trigger('slideDown', [
      state('1', style({ transform: 'translateY(0)', opacity: '1' })),
      state('0', style({ transform: 'translateY(-100%)', opacity: '0' })),

      transition('0 => 1', [
        animate('150ms 100ms cubic-bezier(0.34, 1.56, 0.64, 1)')
      ])
    ])
  ]
})
export class SidenavDrawerComponent implements AfterViewInit, OnInit {
  @Input() show: boolean;
  sidenav$: Observable<Tree<NavigationItem>>;

  constructor(private sidenavNavigator: SidenavNavigatorService) { }

  /**
   * Gets the sidenav tree model with all sidenav items
   */
  ngOnInit() {
    this.sidenav$ = this.sidenavNavigator.select$;
  }

  /**
   * Gets the section (level) name for navigation tree item
   *
   * @param navItem a navigation item tree
   */
  levelName(navItem: Tree<NavigationItem>): string {
    return navItem.data?.levelName ?? '';
  }

  /**
   * Navigate to the selected sidenav parent using sidenav service
   */
  navigateLevelUp(): void {
    this.sidenavNavigator.parent();
  }

  ngAfterViewInit() {
    TweenLite.to('.loading', 2, {
      opacity: .8,
      ease: Power1.easeInOut,
      stagger: {
        repeat: -1,
        yoyo: true,
        each: .7,
        from: 'random'
      }
    });
  }
}
