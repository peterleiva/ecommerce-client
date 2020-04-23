import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Power1 } from 'gsap';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TimelineMax } from 'gsap';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Datastore } from 'src/app/core/services/datastore.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav/sidenav-loading.component.scss'
  ]
})
export class SidenavDrawerComponent implements OnInit {
  categories$: Observable<Category[]>;
  backButton = faChevronLeft;
  current: Category;
  supercategory: Category;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.categories$ = this.datastore
      .findAll(Category, {
        include: 'subcategories.**'
      })
      .pipe(
        map((categories: JsonApiQueryData<Category>) =>
          categories.getModels()
        )
      );
  }

  ngAfterViewInit() {
    TweenLite.from('.loading', 2, {
      scaleX: .75,
      opacity: 1,
      transformOrigin: 'left',
      ease: Power1.easeInOut,
      stagger: {
        repeat: -1,
        yoyo: true,
        each: 1,
        from: 'random'
      }
    });
  }

  /**
   * Select a subcategory as the current
   */
  goForward(subcategory: Category): void {
    this.current = subcategory;
    this.supercategory = this.current?.supercategory;
  }

  /**
   * Select the previous category as the current (go to parent)
   */
  goBackward(): void {
    this.current = this.supercategory;
    this.supercategory = this.current?.supercategory;
  }
}
