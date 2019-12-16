import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/core/models/category.model';
import { NavbarItem, Navbar } from '../header/navbar/navbar.model';

@Injectable()
export class HeaderNavbarService {
  private menu: Navbar;
  private _navbarStream: Subject<Navbar>;

  constructor(private categoriesService: CategoriesService) {
    const homeItem = new NavbarItem('página inicial', '/');
    const contactsItem = new NavbarItem('contatos', ['/contatos']);

    this.menu = new Navbar();
    this._navbarStream = new Subject();

    // lê as categorias
    this.categoriesService.getAll().pipe(
        map(categories => categories.getModels())
      )
      .subscribe((categories: Category[]) => {
        const categoryItem = new NavbarItem('produtos', ['/produtos']);
        categoryItem.subItems = categories.map(category =>
                                  new NavbarItem(category.name, ['/produtos']));

        this.menu.items = [homeItem, categoryItem, contactsItem];
        this._navbarStream.next(this.menu);
      });

  }

  get navbar(): Navbar {
    return this.menu;
  }

  get navbarStream(): Observable<Navbar> {
    return this._navbarStream.asObservable();
  }
}
