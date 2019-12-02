import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { map } from 'rxjs/operators';

import { NavbarItem, Navbar } from 'src/app/layout/header/navbar/navbar.model';
import { Datastore } from './datastore.service';
import { Category } from '../models/category.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavbarService {
  private menu: Navbar;
  private _navbarStream: Subject<Navbar>;

  constructor(private datastore: Datastore) {
    const categoriesItems = [];
    const homeItem = new NavbarItem('página inicial', '/');
    const contactsItem = new NavbarItem('contatos', ['/contacts']);
    this.menu = new Navbar();

    this._navbarStream = new Subject();

    // lê as categorias
    this.datastore.findAll(Category, {
      include: ['products']
    })
      .pipe(
        map(categories => categories.getModels())
      )
      .subscribe(categories => {
        for (const category of categories) {
            // constroi os produtos
            const productsItems =
                category.products.map(product => {
                  return new NavbarItem(product.title, ['/products', product.id]);
                });

            categoriesItems.push(new NavbarItem(category.name, ['/categories'], productsItems));
        }

        this.menu.items = [homeItem, ...categoriesItems, contactsItem];
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
