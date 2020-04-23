import {
  Component,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  QueryList,
  ViewChildren } from '@angular/core';
import { TimelineMax } from 'gsap';

import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() categories: Category[];
  @Output('open') onOpen = new EventEmitter<Category>();
  @ViewChildren('items')
  private _items: QueryList<ElementRef<HTMLElement>>;

  selected: Category;

  ngAfterViewInit() {
    this._items.changes.subscribe(_ => this.openAnimation());
  }

  /**
   * Side navigation only open a subcategory exists
   */
  open(category: Category) {
    if (category.subcategories?.length > 0) {
      this.selected = category;
      this.categories = category.subcategories;

      this.onOpen.emit(category);
    }
  }

  private openAnimation() {
    const tl = new TimelineMax();

    tl.set(this.items, {x: '-100%', opacity: 0});

    tl.to(this.items, .35, {
      x: 0,
      opacity: 1,
      stagger: { amount: .35 }
    });
  }

  get items(): HTMLElement[] {
    return this._items.toArray().map(item => item.nativeElement);
  }
}
