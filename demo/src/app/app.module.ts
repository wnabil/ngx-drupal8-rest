import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// my module
import { Drupal8RestModule, DrupalConstants, Settings } from '../../../index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Drupal8RestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    this.initDrupal();
  }

  initDrupal() {
    const settings: Settings = {
      protocol: 'http',
      host: 'localhost',
      requestTimeout: 5000
    }
    
    DrupalConstants.init(settings);
  }
}
