import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, CommentType, Comment, CommentEntity } from '../models';

@Injectable()
export class CommentService extends BaseService {

  create(comment: Comment): Observable<CommentEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/comment', comment);
  }

  update(cid: number, comment: Comment): Observable<CommentEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [cid],
    };
    return this.request(httpOptions, '/comment/{comment}', comment);
  }

  delete(cid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [cid],
    };
    return this.request(httpOptions, '/comment/{comment}');
  }

  getById(cid: number): Observable<CommentEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [cid],
    };
    return this.request(httpOptions, '/comment/{comment}');
  }

  getType(type: string): Observable<CommentType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [type],
    };
    return this.request(httpOptions, '/entity/comment_type/{comment_type}');
  }

}
