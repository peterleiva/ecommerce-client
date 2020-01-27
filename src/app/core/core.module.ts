import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ProductsModule } from '../products/products.module';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    LayoutModule,
    ProductsModule
  ],
  exports: [],
  providers: []
})
export class CoreModule {

}
