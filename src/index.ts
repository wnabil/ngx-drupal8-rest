import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    UserService,
  ]
})
export class Drupal8RestModule { }

export * from './config';
export * from './models';
export * from './http';
