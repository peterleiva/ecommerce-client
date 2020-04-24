import { Injectable } from '@angular/core'
import { Subject, Observable, ReplaySubject } from 'rxjs'
import { map, tap, distinctUntilChanged } from 'rxjs/operators'
import { JsonApiQueryData } from 'angular2-jsonapi'

import { Category } from 'src/app/core/models/category.model'
import { Datastore } from 'src/app/core/services/datastore.service'

@Injectable()
export class CategoryNavigatorService {
  _navigate$: Subject<Category>
  _categories$: ReplaySubject<Category[]>

  _categoryNavigate: Category
  _roots: Category[]

  constructor(datastore: Datastore) {
    this._navigate$ = new Subject()
    this._categories$ = new ReplaySubject(1);

    datastore
      .findAll(Category, {
        include: 'subcategories.**'
      })
      .pipe(
        map((categories: JsonApiQueryData<Category>) =>
          categories.getModels()
        ),
        tap(categories => this._roots = categories)
      )
      .subscribe(categories => this._categories$.next(categories))

      this._navigate$.subscribe(_ => this._categories$.next(this.categories))
  }

  get categories(): Category[] {
    return this._categoryNavigate?.subcategories || this._roots
  }

  get categories$(): Observable<Category[]> {
    return this._categories$.pipe(distinctUntilChanged())
  }

  get navigate$(): Observable<Category> {
    return this._navigate$
  }

  open(category: Category) {
    this._categoryNavigate = category
    this._navigate$.next(this._categoryNavigate)
  }

  close() {
    this._categoryNavigate = this._categoryNavigate?.supercategory
    this._navigate$.next(this._categoryNavigate)
  }
}
