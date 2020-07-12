import { Component } from '@angular/core';

@Component({
  selector: 'store-header-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent {

  constructor() { }

}
