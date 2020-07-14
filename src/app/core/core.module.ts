import { HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ProductsModule } from '../products/products.module';
import { CoreComponent } from './core.component';
import { AppContainerComponent } from './app-container/app-container.component';

import 'hammerjs';

@NgModule({
  declarations: [
    CoreComponent,
    AppContainerComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    LayoutModule,
    ProductsModule,
    HammerModule
  ],
  exports: [],
  providers: []
})
export class CoreModule {

}
