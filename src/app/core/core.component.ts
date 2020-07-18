import { Component, ViewChild } from '@angular/core';

import { SidenavTriggerDirective } from '../layout/sidenav/sidenav-trigger/sidenav-trigger.directive';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  @ViewChild(SidenavTriggerDirective) navTrigger: SidenavTriggerDirective;
  showSidenav: boolean;

  AfterViewInit() {
    this.showSidenav = this.navTrigger.isOn();
  }

  get menuLabel(): string {
    return this.showSidenav ? 'Fechar' : 'Menu';
  }

  /**
   * Open the side nav only if it's close
   */
  openSidenav(): void {
    this.navTrigger.openNav();
  }

  /**
   * Close the side nar nav if it's open
   */
  closeSidenav(): void {
    this.navTrigger.closeNav();
  }
}
