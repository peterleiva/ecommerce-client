import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BarModule } from './bar/bar.module';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { HeaderContainerComponent } from './header/header-container/header-container.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderNavbarService } from './services/header-navbar.service';
import { SidenavService } from './services/sidenav.service';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavItemComponent } from './sidenav-drawer/sidenav-list/sidenav-item/sidenav-item.component';
import { SidenavListComponent } from './sidenav-drawer/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SidenavDrawerComponent,
    HamburguerButtonComponent,
    SidenavListComponent,
    SidenavItemComponent,
    HeaderContainerComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    BarModule
  ],
  providers: [
    HeaderNavbarService,
    SidenavService
  ],
  exports: [
    HeaderComponent,
    HeaderContainerComponent,
    SidenavDrawerComponent,
    HamburguerButtonComponent
  ]
})
export class LayoutModule { }
