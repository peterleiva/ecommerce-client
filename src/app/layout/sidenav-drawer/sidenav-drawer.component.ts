import { Component, OnInit } from '@angular/core';
import { TweenLite, Power1 } from 'gsap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  selectedCategory: Category;
  backButton = faChevronLeft;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.categories$ = this.datastore
      .findAll(Category, {
        include: 'categories.**'
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
}
