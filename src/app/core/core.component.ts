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
}
