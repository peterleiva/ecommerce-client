import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenLite, Power1 } from 'gsap';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { gsap, TimelineMax } from 'gsap';
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
  @ViewChild('currentSideNav', {read: ElementRef}) _currentSideNav: ElementRef<HTMLElement>;
  @ViewChild('previousSideNav', {read: ElementRef}) _previousSideNav: ElementRef<HTMLElement>;

  categories$: Observable<Category[]>;
  current: Category;
  supercategory: Category;
  backButton = faChevronLeft;

  goForwardTimeline: TimelineMax;

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

  get currentSideNav(): HTMLElement {
    return this._currentSideNav.nativeElement;
  }

  get previousSideNav(): HTMLElement {
    return this._previousSideNav.nativeElement;
  }

  /**
   * Select a subcategory as the current
   */
  goForward(subcategory: Category): void {
    console.log('forward');

    this.current = subcategory;
    this.supercategory = this.current?.supercategory;
    console.log('antes previous', this.previousSideNav);

    this.goForwardTimeline = new TimelineMax();

    this.goForwardTimeline
      .set(this.currentSideNav, {opacity: 0, x: '-100%'})

      .fromTo(this.previousSideNav, 0, {
        opacity: 0,
        x: '-100%'
      }, {
        opacity: 0,
        x: 0
      })
      .fromTo(this.previousSideNav, .5, {
        opacity: 1,
        rotateX: 0,
      },{
        opacity: 0,
        rotateX: 90,
        transformOrigin: 'center bottom',
        transformPerspective: 1500,
        transformStyle: 'perserve-3d'
      })
      .add('previous')

      .to(this.currentSideNav, .5, {
        x: 0,
        opacity: 1
      }, 'previous-=.2');
  }

  /**
   * Select the previous category as the current (go to parent)
   */
  goBackward(): void {

    this.current = this.supercategory;
    this.goForwardTimeline?.reverse();
    this.supercategory = this.current?.supercategory;

  }
}
