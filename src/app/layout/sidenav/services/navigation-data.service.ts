/**
 * This file have a side navigation service
 * @packageDocumentation
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tree } from '../../../shared/data-structure/tree/tree.model';
import NavigationItem from '../../models/navigation-item.model';

/**
 * This service packs a side navigation tree data
 *
 * Each node represents a general tree which can have as many children as
 * possible (althrough performance can have issue). Each subtree has a
 * navigation item with information about a single navigation clickable item
 * and also information or metainformation about the current level.
 */
@Injectable()
export class NavigationDataService {
  private root: Tree<NavigationItem>;
  private sidenav$: BehaviorSubject<Tree<NavigationItem>>;

  constructor() {
    this.root = new Tree();

    const home = new NavigationItem('página inicial', '/', null, 'home');
    const explore = new NavigationItem('explorar', '/explorar', 'Departamentos',
                                       'search');
    const orders = new NavigationItem('meus pedidos', '/pedidos', null,
                                      'receipt');
    const contact = new NavigationItem('contatos', '/contatos', null,
                                       'comment');

    this.root.appendChild(home);
    this.root.appendChild(explore);
    this.root.appendChild(orders);
    this.root.appendChild(contact);

    this.sidenav$ = new BehaviorSubject(this.root);
  }

  /**
   * Gets the navigation tree data
   */
  get nav(): Tree<NavigationItem> {
    return this.root;
  }

  /**
   * Gets a observable containing a rooted tree which represents the sidenav
   */
  get nav$(): Observable<Tree<NavigationItem>> {
    return this.sidenav$.asObservable();
  }
}
