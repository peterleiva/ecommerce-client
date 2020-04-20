import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JsonApiModule } from 'angular2-jsonapi';

import { CollapsibleDirective } from './directives/collapsible.directive';
import { PageEntriesInfoComponent } from './pagination/page-entries-info/page-entries-info.component';
import { PaginateComponent } from './pagination/paginate/paginate.component';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { IconComponent } from './icon/icon.component';
import { TabSectionDirective } from './tab/tab-section/tab-section.directive';
import { TabContainerComponent } from './tab/tab-container/tab-container.component';
import { TabTriggerDirective } from './tab/tab-trigger.directive';

@NgModule({
  declarations: [
    CollapsibleDirective,
    PaginateComponent,
    PageEntriesInfoComponent,
    OverlayComponent,
    IconComponent,
    TabSectionDirective,
    TabContainerComponent,
    TabTriggerDirective
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
    PageEntriesInfoComponent,
    OverlayComponent,
    TabSectionDirective,
    TabContainerComponent,
    TabTriggerDirective
  ]
})
export class SharedModule { }
