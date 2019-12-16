import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { faLeaf, faSearch, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from '../layout/header/navbar/navbar.model';
import { Product } from './models/product.model';
import { ProductsQuickViewService } from './services/products-quick-view.service';
import { OverlayComponent } from './components/overlay/overlay.component';
import { HeaderNavbarService } from '../layout/services/header-navbar.service';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  @ViewChild(OverlayComponent, {static: true}) overlay: OverlayComponent;
  faLeaf = faLeaf;
  faSearch = faSearch;
  faConfig = faCog;
  faCart = faShoppingCart;
  productQuickView$: Observable<Product>;

  menu: Navbar;

  constructor(
    private navbarService: HeaderNavbarService,
    private quickviewService: ProductsQuickViewService) { }

  ngOnInit() {
    this.navbarService.navbarStream.subscribe(navbar => this.menu = navbar);

    // open quick view when a new product has arrive
    this.productQuickView$ = this.quickviewService.productQuickView$.pipe(
                              tap(_ => this.overlay.open())
                            );
  }
}
