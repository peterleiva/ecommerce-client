import { Component } from '@angular/core';
import { faLeaf, faSearch, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  faLeaf = faLeaf;
  faSearch = faSearch;
  faConfig = faCog;
  faCart = faShoppingCart;
}
