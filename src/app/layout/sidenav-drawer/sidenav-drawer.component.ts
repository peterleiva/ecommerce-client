import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TweenLite, Power1 } from 'gsap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { CategoryNavigatorService } from './category-navigator.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav/sidenav-loading.component.scss'
  ],
  providers: [CategoryNavigatorService]
})
export class SidenavDrawerComponent implements AfterViewInit {
  backButton = faChevronLeft;

  constructor(private navigatorService: CategoryNavigatorService) { }

  get categories$(): Observable<Category[]> {
    return this.navigatorService.categories$;
  }

  get navigate$(): Observable<Category> {
    return this.navigatorService.navigate$;
  }

  close(): void {
    this.navigatorService.close();
  }

  ngAfterViewInit() {
    TweenLite.from('.loading', 2, {
      scaleX: .65,
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
