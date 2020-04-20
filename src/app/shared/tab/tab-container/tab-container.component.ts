import { Component, QueryList, AfterContentInit, ContentChildren } from '@angular/core';

import { TabSectionDirective } from '../tab-section/tab-section.directive';
import { tap } from 'rxjs/operators';
import { TabTriggerDirective } from '../tab-trigger.directive';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabSectionDirective) sections: QueryList<TabSectionDirective>;
  @ContentChildren(TabTriggerDirective) triggers: QueryList<TabTriggerDirective>;


  ngAfterContentInit() {
    setTimeout(() => {
      this.activeDefault();

    }, 0);

    // listens triggers
    this.triggers.forEach((trigger) => {
      trigger.tab.subscribe((tab: any) => this.activeSection(tab));
    })
  }

  private activeSection(sectionId: any) {
    this.sections.forEach((section) => {
      section.active = section.appTabSection === sectionId ? true : false;
    })
  }

  /**
   * Define the first as active there`s not selected
   */
  private activeDefault() {
    if (!this.sections.some( section => section.active )) {
      const section = this.sections.first as TabSectionDirective;

      if (section) {
        section.active = true;
      }
    }
  }

  /**
   * Deactive all tab sections
   */
  deactiveSections(): void {
    this.sections.forEach(section => section.active = false);
  }
}
