import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// my module
import { Drupal8RestModule } from '../../../';

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
export class AppModule { }
