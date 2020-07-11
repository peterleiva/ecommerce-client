import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category.model';
import { NavbarItem, Navbar } from '../header/navbar/navbar.model';

@Injectable()
export class HeaderNavbarService {
  private menu: Navbar;
  private _navbar$: Subject<Navbar>;

  constructor(private categoriesService: CategoryService) {
    const homeItem = new NavbarItem('página inicial', '/');
    const contactsItem = new NavbarItem('contatos', ['/contatos']);

    this.menu = new Navbar();
    this._navbar$ = new Subject();

    // lê as categorias
    this.categoriesService
      .getAll()
      .subscribe((categories: Category[]) => {
        const categoryItem = new NavbarItem('produtos', ['/produtos']);
        categoryItem.subItems = categories.map(category =>
                                  new NavbarItem(category.name, ['/produtos']));

        this.menu.items = [homeItem, categoryItem, contactsItem];
        this._navbar$.next(this.menu);
      });

  }

  get navbar(): Navbar {
    return this.menu;
  }

  get navbarStream(): Observable<Navbar> {
    return this._navbar$.asObservable();
  }
}
