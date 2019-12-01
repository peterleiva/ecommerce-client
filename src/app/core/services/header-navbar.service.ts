import { Injectable } from '@angular/core';
import { JsonApiQueryData } from 'angular2-jsonapi';

import { NavbarItem, Navbar } from 'src/app/layout/header/navbar/navbar.model';
import { Datastore } from './datastore.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavbarService {
  private menu: Navbar;

  constructor(private datastore: Datastore) {
    const homeItem = new NavbarItem('página inicial', '/');

    // lê as categorias
    this.datastore.findAll(Category)
      .subscribe(categories => console.log(categories.getModels()));

    // lê as categorias e os colocam aqui
    const productsItem = new NavbarItem('produtos', ['/products']);
    const contactsItem = new NavbarItem('contatos', ['/contacts']);

    this.menu = new Navbar();
    this.menu.items = [homeItem, productsItem, contactsItem];
  }

  get navbar(): Navbar {
    return this.menu;
  }
}
