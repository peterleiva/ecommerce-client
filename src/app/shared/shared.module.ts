import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { CollapsibleDirective } from './directives/collapsible.directive';
import { PageEntriesInfoComponent } from './pagination/page-entries-info/page-entries-info.component';
import { PaginateComponent } from './pagination/paginate/paginate.component';
import { RouterModule } from '@angular/router';
import { OverlayComponent } from './overlay/overlay.component';
import { IconComponent } from './icon/icon.component';
import { TabSectionDirective } from './tab/tab-section/tab-section.directive';
import { TabContainerComponent } from './tab/tab-container/tab-container.component';
import { TabTriggerDirective } from './tab/tab-trigger.directive';
import { TogglableModule } from './togglable/togglable.module';
import { DropMenuModule } from './drop-menu/drop-menu.module';

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
    CommonModule,
    TogglableModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    // CollapsibleDirective,
    // JsonApiModule,
    IconComponent,
    // PaginateComponent,
    // PageEntriesInfoComponent,
    // OverlayComponent,
    // TabSectionDirective,
    // TabContainerComponent,
    TabTriggerDirective,
    TogglableModule,
    DropMenuModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
