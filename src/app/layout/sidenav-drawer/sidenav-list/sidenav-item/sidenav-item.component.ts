/**
 * This file represents a single sidenav clickable item
 * @packageDocumentation
 */
import { Component, Input } from '@angular/core';

import NavigationItem from 'src/app/layout/models/navigation-item.model';
import { Tree } from 'src/app/shared/data-structure/tree/tree.model';

/**
 * Side navigation item component for navigable item
 *
 * Nav item styles a single nav element, changing state for active members. It
 * reads NavigationItem model to gets its icon, link name, link, if it has
 * children, all of them except name is optional
 */
@Component({
  selector: 'store-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent {
  @Input() navItem: Tree<NavigationItem>;

  /**
   * Gets the optional nav' icon name
   *
   * Icon naming depending on font awesome icon library came from shared module
   * The FA library register the fas package, so the icon returns its fa-icon
   * component argument if there's a icon data to navItem. Instead it returns
   * a empty string
   */
  get iconName(): string[] | '' {
    if (this.navItem.data.icon) {
      return ['fas', this.navItem.data.icon];
    } else {
      return '';
    }
  }
}
