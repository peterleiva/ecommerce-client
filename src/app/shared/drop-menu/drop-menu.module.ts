/**
 * This files defines a drop menu module with all necessary assets
 * @packageDocumentation
 */
import { NgModule } from '@angular/core';

import { DropMenuDirective } from './drop-menu.directive';
import {
  DropMenuTriggerDirective
} from './trigger/drop-menu-trigger.directive';

@NgModule({
  declarations: [
    DropMenuDirective,
    DropMenuTriggerDirective
  ],
  exports: [
    DropMenuDirective,
    DropMenuTriggerDirective
  ]
})
export class DropMenuModule { }
