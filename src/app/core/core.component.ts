import { Component, OnInit } from '@angular/core';
import { faLeaf, faSearch, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from '../layout/header/navbar/navbar.model';
import { HeaderNavbarService } from './services/header-navbar.service';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  faLeaf = faLeaf;
  faSearch = faSearch;
  faConfig = faCog;
  faCart = faShoppingCart;

  menu: Navbar;

  constructor(private navbarService: HeaderNavbarService) { }

  ngOnInit() {
    this.menu = this.navbarService.navbar;
  }
}
