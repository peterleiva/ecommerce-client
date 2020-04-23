import {
  Component,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
  ChangeDetectorRef} from '@angular/core'
import { TimelineMax } from 'gsap'

import { Category } from 'src/app/core/models/category.model'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() categories: Category[]
  @Output('open') onOpen = new EventEmitter<Category>()
  @ViewChildren('items')
  private _items: QueryList<ElementRef<HTMLElement>>
  @ViewChild('nav')
  private _nav: ElementRef<HTMLElement>

  selected: Category
  timeline: TimelineMax

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this._items.changes.subscribe(_ => this.openAnimation())
  }

  /**
   * Side navigation only open a subcategory exists
   */
  open(category: Category) {
    if (category.subcategories?.length > 0) {

      // animate stuffs
      const tl = new TimelineMax()

      tl.set(this.nav, {
        transformOrigin: 'center bottom',
        perspective: 5000,
        transformStyle: 'preserve-3d'
      })

      tl.add('close')
      tl.to(this.nav, .2, {
        rotateX: 90,

        onComplete: () => {
          this.selected = category
          this.categories = category.subcategories

          this.onOpen.emit(category)
          this.changeDetector.detectChanges()
        }
      })


      this.timeline = tl
    }
  }

  private openAnimation() {
    this.timeline
      .set(this.nav, { rotateX: 0 })
      .set(this.items, { x: '-100%', opacity: 0 })

      .to(this.items, .25, {
        x: 0,
        opacity: 1,
        stagger: { amount: .25 }
      })
  }

  get nav(): HTMLElement {
    return this._nav.nativeElement
  }

  get items(): HTMLElement[] {
    return this._items.toArray().map(item => item.nativeElement)
  }
}
