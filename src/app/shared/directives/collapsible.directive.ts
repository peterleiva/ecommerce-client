import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import Collapsible from '../interfaces/collapsible.interface';
import { Observable } from 'rxjs';
import { partition, tap } from 'rxjs/operators';

@Directive({
  selector: '[appCollapsible]'
})
export class CollapsibleDirective implements Collapsible, OnInit {
  @Input() collapsibleState$: Observable<boolean>;
  @Input('appCollapsible') @HostBinding('class.collapsed') collapsed;
  @Input() collapseRef;

  private collapse$: Observable<boolean>;
  private expand$: Observable<boolean>;


  ngOnInit() {

    console.log(this.collapseRef);
    if (this.collapsibleState$) {
      this.collapsibleState$.pipe(
        tap(v => {if (v) {this.expand(); }}),
        tap(v => {if (!v) {this.collapse(); }}),
      ).subscribe();
    }
  }

  get expanded() {
    return !this.collapsed;
  }

  collapse() {
    console.log('collapse');
    this.collapsed = true;
  }

  expand() {
    console.log('expand');
    this.collapsed = false;
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

}
