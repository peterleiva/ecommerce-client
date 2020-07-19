import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { NavigationDataService } from './services/navigation-data.service';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavItemComponent } from './sidenav-drawer/sidenav-list/sidenav-item/sidenav-item.component';
import { SidenavListComponent } from './sidenav-drawer/sidenav-list/sidenav-list.component';
import { SidenavTriggerDirective } from './sidenav-trigger/sidenav-trigger.directive';


@NgModule({
  declarations: [
    SidenavTriggerDirective,
    SidenavDrawerComponent,
    SidenavListComponent,
    SidenavItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],

  providers: [NavigationDataService],

  exports: [
    SidenavTriggerDirective,
    SidenavDrawerComponent
  ]
})
export class SidenavModule { }
