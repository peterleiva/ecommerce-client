/**
 * This file describe side navigation selector service
 * @packageDocumentation
 */
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Tree } from '../../../shared/data-structure/tree/tree.model';
import NavigationItem from '../../models/navigation-item.model';
import { NavigationDataService } from './navigation-data.service';

/**
 * SidenavNavigatorService tracks the current navigation starting from rooted
 * navigation item come from SidenavService
 *
 * The navigation can be two ways. A navigation model is a tree, so it can go
 * through the parent or one of its children. SidenavSelectService tracks the
 * current selected navigation item selected. There's also a option to navigate
 * to current selected parent
 */
@Injectable()
export class SidenavNavigatorService {
  private navSelected: Tree<NavigationItem>;
  private _selected$: BehaviorSubject<Tree<NavigationItem>>;

  constructor(private dataService: NavigationDataService) {
    this._selected$ = new BehaviorSubject(this.dataService.nav);
  }

  /**
   * Most recent sidenav selected stream
   *
   * @returns current sidenav stream
   */
  get select$(): Observable<Tree<NavigationItem>> {
    return this._selected$.asObservable();
  }

  /**
   * Navigate to the parent of current sidenav
   *
   * Alter the current selected sidenav for own parent, if it not root. Also
   * send an event with parent item
   *
   * @returns this service instance
   */
  parent(): SidenavNavigatorService {
    if (!this.navSelected.isRoot()) {
      const parent = this.navSelected.parent;
      this._selected$.next(parent);
      this.navSelected = parent;
    }

    return this;
  }

  /**
   * Change the current nav item
   *
   * Navigate to a tree represents a sidenav node only if it has children. A
   * leaf is the deepest the navigator can go through. While the current
   * sidenav change, the stream send an event with the new sidenav item
   *
   * @param tree Non-leaf sidenav to be selected
   * @returns this service instance
   */
  navigate(tree: Tree<NavigationItem>): SidenavNavigatorService {
    if (tree.hasChildren()) {
      this.navSelected = tree;
      this._selected$.next(this.navSelected);
    }

    return this;
  }
}
