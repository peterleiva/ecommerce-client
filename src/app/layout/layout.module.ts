import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BarModule } from './bar/bar.module';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { HeaderContainerComponent } from './header/header-container/header-container.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderNavbarService } from './services/header-navbar.service';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HamburguerButtonComponent,
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
    HeaderContainerComponent,
    HamburguerButtonComponent,
    SidenavModule
  ]
})
export class LayoutModule { }
