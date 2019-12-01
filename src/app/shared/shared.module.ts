import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JsonApiModule } from 'angular2-jsonapi';

import { CollapsibleDirective } from './directives/collapsible.directive';

@NgModule({
  declarations: [
    CollapsibleDirective
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    CollapsibleDirective,
    JsonApiModule
  ]
})
export class SharedModule { }
