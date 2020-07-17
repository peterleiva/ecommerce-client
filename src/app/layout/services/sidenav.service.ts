/**
 * This file have a side navigation service
 * @packageDocumentation
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tree } from '../../shared/data-structure/tree/tree.model';
import NavigationItem from '../models/navigation-item.model';

/**
 * This service packs a side navigation tree data
 *
 * Each node represents a general tree which can have as many children as
 * possible (althrough performance can have issue). Each subtree has a
 * navigation item with information about a single navigation clickable item
 * and also information or metainformation about the current level.
 */
@Injectable()
export class SidenavService {
  private root: Tree<NavigationItem>;
  private _sidenav$: BehaviorSubject<Tree<NavigationItem>>;

  constructor() {
    this.root = new Tree();

    const home = new NavigationItem('página inicial', '/', null, 'home');
    const explore = new NavigationItem('explorar', '/produtos', 'Departamentos',
                                       'search');
    const orders = new NavigationItem('meus pedidos', '/pedidos', null,
                                      'receipt');
    const contact = new NavigationItem('contatos', '/contatos', null,
                                       'comment');

    this.root.appendChild(home);
    this.root.appendChild(explore);
    this.root.appendChild(orders);
    this.root.appendChild(contact);

    this._sidenav$ = new BehaviorSubject(this.root);
  }

  /**
   * Gets a observable containing a rooted tree which represents the sidenav
   */
  get sidenav$(): Observable<Tree<NavigationItem>> {
    return this._sidenav$.asObservable();
  }
}
