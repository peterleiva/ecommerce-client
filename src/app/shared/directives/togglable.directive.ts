import {
  Directive,
  Output,
  EventEmitter,
  Input,
  OnInit,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appToggable]'
})
export class TogglableDirective implements OnInit {
  @Input() checked: boolean;
  @Output('change') change$: EventEmitter<boolean>;

  ngOnInit() {
    this.change$ = new EventEmitter();
    this.change$.emit(this.checked);
  }

  @HostListener('click') toggle() {
    this.checked = !this.checked;
    this.change$.emit(this.checked);
  }
}