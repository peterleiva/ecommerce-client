import { Injectable } from '@angular/core';
import { NavbarItem, Navbar } from 'src/app/layout/header/navbar/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavbarService {
  private menu: Navbar;

  constructor() {
    const homeItem = new NavbarItem('página inicial', '/');

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
