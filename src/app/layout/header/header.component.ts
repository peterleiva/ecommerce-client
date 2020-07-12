import { Component } from '@angular/core';

@Component({
  selector: 'store-header',
  template: `
    <ng-content select="store-header-container">
    </ng-content>
    `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { }
