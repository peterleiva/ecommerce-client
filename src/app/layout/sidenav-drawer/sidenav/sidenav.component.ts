import {
  Component,
  Input,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
  AfterViewInit
} from '@angular/core'
import { TimelineMax } from 'gsap'

import { Category } from 'src/app/core/models/category.model'
import { CategoryNavigatorService } from '../category-navigator.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  @Input() categories: Category[]
  @ViewChildren('items') private _items: QueryList<ElementRef<HTMLElement>>
  @ViewChild('nav') private _nav: ElementRef<HTMLElement>

  timeline: TimelineMax

  constructor(private categoryService: CategoryNavigatorService) { }

  ngAfterViewInit() {
    this._items.changes.subscribe(_ => this.openAnimation())
  }


  get nav(): HTMLElement {
    return this._nav.nativeElement
  }

  get items(): HTMLElement[] {
    return this._items.toArray().map(item => item.nativeElement)
  }

  /**
   * Side navigation only open a subcategory exists
   */
  open(category: Category) {
    if (category.subcategories?.length > 0) {

      this.closeAnimation()
        .then(_ => this.categoryService.open(category))
    }
  }

  /**
   * Close animation is wrapped around a promise to change detector catch it
   *
   */
  private closeAnimation(): Promise<TimelineMax> {
    this.timeline = new TimelineMax()

    this.timeline
      .set(this.nav, {
        transformOrigin: 'center bottom',
        perspective: 5000,
        transformStyle: 'preserve-3d'
      })
      .add('close')

      .to(this.nav, .2, { rotateX: 90 })

    return this.timeline.then()
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
}
