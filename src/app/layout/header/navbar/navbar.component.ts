import { Component, Input, ViewChild } from '@angular/core';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from './navbar.model';
import { CollapsibleDirective } from 'src/app/shared/directives/collapsible.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() menu: Navbar;
  @ViewChild(CollapsibleDirective, {static: false}) collapsibled: CollapsibleDirective;
  faMenu = faBars;
  faAdd = faPlus;

  toggle() {
    this.collapsibled.toggle();
  }
}
