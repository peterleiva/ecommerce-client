import { Component } from '@angular/core';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  showSidebar = false;

  get menuLabel(): string {
    return this.showSidebar ? 'Fechar' : 'Menu';
  }

  /**
   * Open the side nav only if it's close
   */
  openSidenav(): void {
    if (!this.showSidebar) {
      this.showSidebar = true;
    }
  }

  /**
   * Close the side nar nav if it's open
   */
  closeSidenav(): void {
    this.showSidebar = false;
  }
}
