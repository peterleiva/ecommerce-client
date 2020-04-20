import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTabSection]'
})
export class TabSectionDirective {
  @Input() @HostBinding('class.active') active = false;
  @Input() appTabSection: any;
}
