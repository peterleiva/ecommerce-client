import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SidenavTriggerDirective } from './sidenav-trigger/sidenav-trigger.directive';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavListComponent } from './sidenav-drawer/sidenav-list/sidenav-list.component';
import { SidenavItemComponent } from './sidenav-drawer/sidenav-list/sidenav-item/sidenav-item.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    SidenavTriggerDirective,
    SidenavDrawerComponent,
    SidenavListComponent,
    SidenavItemComponent,
  ],
  imports: [
    SharedModule
  ],

  providers: [SidenavService],

  exports: [
    SidenavTriggerDirective,
    SidenavDrawerComponent
  ]
})
export class SidenavModule { }
