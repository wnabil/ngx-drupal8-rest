import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService, ViewService, BaseService, ContentService, TaxonomyService, FileService } from './http';
import { DrupalConstants } from './config';

/**
 * implement APP_INITIALIZER
 * @param userService user service
 * @see https://gillespie59.github.io/2016/12/04/angular2-code-before-rendering.html
 */
export function init(userService: UserService): () => void {
  return () => {
    DrupalConstants.Connection = userService.connection;
  };
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    BaseService,
    UserService,
    ViewService,
    ContentService,
    TaxonomyService,
    FileService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': init,
      'deps': [UserService],
      'multi': true
    }
  ]
})
export class Drupal8RestModule { }

export * from './config';
export * from './models';
export * from './http';
