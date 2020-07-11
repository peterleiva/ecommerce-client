import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BarModule } from './bar/bar.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderNavbarService } from './services/header-navbar.service';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { SidenavComponent } from './sidenav-drawer/sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav-drawer/sidenav/sidenav-item/sidenav-item.component';
import { HeaderItemDirective } from './header/header-item/header-item.directive';
import { HeaderContainerComponent } from './header/header-container/header-container.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SidenavDrawerComponent,
    HamburguerButtonComponent,
    SidenavComponent,
    SidenavItemComponent,
    HeaderItemDirective,
    HeaderContainerComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    BarModule
  ],
  providers: [
    HeaderNavbarService
  ],
  exports: [
    HeaderComponent,
    HeaderItemDirective,
    HeaderContainerComponent,
    SidenavDrawerComponent,
    HamburguerButtonComponent
  ]
})
export class LayoutModule { }
