import { NgModule } from '@angular/core';

import { BarComponent } from './bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    BarComponent,
    TopBarComponent,
    BottomBarComponent
  ],
  exports: [
    BarComponent, TopBarComponent, BottomBarComponent
  ]
})
export class BarModule {

}
