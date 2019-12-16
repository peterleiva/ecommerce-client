import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JsonApiModule } from 'angular2-jsonapi';

import { CollapsibleDirective } from './directives/collapsible.directive';
import { PageEntriesInfoComponent } from './pagination/page-entries-info/page-entries-info.component';
import { PaginateComponent } from './pagination/paginate/paginate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CollapsibleDirective,
    PaginateComponent,
    PageEntriesInfoComponent
  ],
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    CollapsibleDirective,
    JsonApiModule,
    PaginateComponent,
    PageEntriesInfoComponent
  ]
})
export class SharedModule { }
