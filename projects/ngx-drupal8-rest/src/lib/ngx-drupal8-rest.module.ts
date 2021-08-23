import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DrupalConstants } from './config';
import { UserService } from './http/user.service';
import { BaseService } from './http/base.service';
import { ViewService } from './http/view.service';
import { ContentService } from './http/content.service';
import { TaxonomyService } from './http/taxonomy.service';
import { FileService } from './http/file.service';
import { MediaService } from './http/media.service';
import { FlagService } from './http/flag.service';
import { WebformService } from './http/webform.service';
import { PushService } from './http/push.service';
import { CommerceService } from './http/commerce.service';
import { CommentService } from './http/comment.service';
import { QuizService } from './http/quiz.service';

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
// @dynamic
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
    MediaService,
    FlagService,
    WebformService,
    PushService,
    CommerceService,
    CommentService,
    QuizService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': init,
      'deps': [UserService],
      'multi': true
    }
  ]
})
export class Drupal8RestModule { }

export {
  BaseService,
  UserService,
  ViewService,
  ContentService,
  TaxonomyService,
  FileService,
  MediaService,
  FlagService,
  WebformService,
  PushService,
  CommerceService,
  CommentService,
  QuizService
};
