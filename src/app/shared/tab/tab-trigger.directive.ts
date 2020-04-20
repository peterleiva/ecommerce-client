import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTabTrigger]'
})
export class TabTriggerDirective {
  @Output() tab = new EventEmitter<any>();
  @Output() openTab = new EventEmitter<any>();

  @HostListener('openTab', ['$event']) select(tab: any) {
    console.log('tab', tab);
    return this.tab.emit(tab);
  }
}
