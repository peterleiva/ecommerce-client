import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { gsap, TweenLite, Power1, Back } from 'gsap';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { CategoryNavigatorService } from './category-navigator.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'store-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav/sidenav-loading.component.scss'
  ],
  providers: [CategoryNavigatorService]
})
export class SidenavDrawerComponent implements AfterViewInit {
  backButton = faChevronLeft;
  private _show: boolean;
  @ViewChild('sidenav') _sidenav: ElementRef<HTMLElement>;

  @Input() set show(value: boolean) {
    this._show = value;
    this._show ? this.showUp() : this.hide();
  }

  constructor(private navigatorService: CategoryNavigatorService) { }

  get categories$(): Observable<Category[]> {
    return this.navigatorService.categories$;
  }

  get navigator$(): Observable<Category> {
    return this.navigatorService.navigate$;
  }

  get sidenav(): HTMLElement {
    return this._sidenav.nativeElement;
  }

  close(): void {
    this.navigatorService.close();
  }

  async showUp(): Promise<TweenLite> {
    await this.hide();

    return (
      TweenLite.to(this.sidenav, .3, {
        x: 0,
        ease: Back.easeOut,
        delay: .15
      })
    );
  }

  async hide(): Promise<TweenLite> {
    return gsap.set(this.sidenav, {x: '-100%'});
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
