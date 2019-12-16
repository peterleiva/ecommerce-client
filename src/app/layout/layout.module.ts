import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderNavbarService } from './services/header-navbar.service';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    HeaderNavbarService
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
