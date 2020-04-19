import { Component, OnInit } from '@angular/core';
import { TweenLite, Power1 } from 'gsap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonApiQueryData } from 'angular2-jsonapi';

import { Department } from 'src/app/core/models/department.model';
import { Datastore } from 'src/app/core/services/datastore.service';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: [
    './sidenav-drawer.component.scss',
    './sidenav/sidenav-loading.component.scss'
  ]
})
export class SidenavDrawerComponent implements OnInit {
  departments$: Observable<Department[]>;

  constructor(private datastore: Datastore) { }

  ngOnInit() {
    this.departments$ = this.datastore
      .findAll(Department, {
        include: 'categories.subcategories**'
      })
      .pipe(
        map((departments: JsonApiQueryData<Department>) =>
          departments.getModels()
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
