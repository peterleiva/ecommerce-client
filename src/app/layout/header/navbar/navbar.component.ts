import {
  Component,
  Input,
  ViewChild,
  EventEmitter,
  Output,
  OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from './navbar.model';
import { CollapsibleDirective } from 'src/app/shared/directives/collapsible.directive';

@Component({
  selector: 'store-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menu: Navbar;
  @ViewChild(CollapsibleDirective) collapsible: CollapsibleDirective;
  @Output() expanded: EventEmitter<void>;

  faMenu = faBars;

  ngOnInit() {
    this.expanded = new EventEmitter();
  }

  toggle() {
    this.collapsible.toggle();

    if (this.collapsible.expanded) {
      this.expanded.emit();
    }
  }
}
