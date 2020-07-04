import { NgModule } from '@angular/core';
import { ToggleButtonDirective } from './toggle-button.directive';

@NgModule({
  declarations: [
    ToggleButtonDirective
  ],
  exports: [
    ToggleButtonDirective
  ]
})
export class TogglableModule {

}
