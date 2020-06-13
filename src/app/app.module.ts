import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import Bugsnag from '@bugsnag/js';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular'

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';

Bugsnag.start({ apiKey: 'fd6ebde8a5fc5bfe5016c053612ac49e' })

registerLocaleData(localePt, 'pt');

export function errorHandlerFactory() {
  return new BugsnagErrorHandler()
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule
  ],
  /* Pass the BugsnagErrorHandler class along to the providers for your module */
  providers: [ { provide: ErrorHandler, useFactory: errorHandlerFactory } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
