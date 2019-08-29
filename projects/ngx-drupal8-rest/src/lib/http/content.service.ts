import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, ContentEntity, ContentType } from '../models';

@Injectable()
export class ContentService extends BaseService {

  /**
   * Implement resource /node/{node} GET
   * @param nid the node id
   */
  get(nid: number): Observable<ContentEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [nid]
    };
    return this.request(httpOptions, '/node/{node}');
  }

  /**
   * Implement resource /node: POST
   * @param content node object to create
   */
  create(content: ContentEntity): Observable<ContentEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/node', content);
  }

  /**
   * Implement resource /node/{node}: PATCH
   * @param nid node id to update
   * @param content node object with required values
   */
  update(nid: number, content: ContentEntity): Observable<ContentEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [nid]
    };
    return this.request(httpOptions, '/node/{node}', content);
  }

  /**
   * Implement resource /node/{node}: DELETE
   * @param nid content id to delete
   */
  delete(nid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [nid]
    };
    return this.request(httpOptions, '/node/{node}');
  }

  /**
   * Implement resource /entity/node_type/{node_type}
   * @param type node type or machine name like page, article
   */
  contentType(type: string): Observable<ContentType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [type]
    };
    return this.request(httpOptions, '/entity/node_type/{node_type}');
  }

}
