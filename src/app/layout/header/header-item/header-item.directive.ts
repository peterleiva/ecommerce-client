import { OnInit, Input, Directive } from '@angular/core';
import HeaderPosition from '../header-position.enum';

@Directive({
  selector: '[appHeaderItem]'
})
export class HeaderItemDirective implements OnInit {
  @Input() position: HeaderPosition;

  ngOnInit(): void {
  }

}
