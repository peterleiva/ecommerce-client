import { Component, Input } from '@angular/core';

export enum IconPosition {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}

@Component({
  selector: 'store-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() label: string;
  @Input() labelPosition = IconPosition.RIGHT;
  @Input() size: string;

  get classes(): {[className: string]: boolean} {
    return {
      [this.labelPosition]: true
    };
  }
}
