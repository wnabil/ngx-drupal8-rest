import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, MediaEntity, MediaType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MediaService extends BaseService {

  /**
   * Implement resource /media/{media}/edit GET
   * @param mid the media id
   */
  get(mid: number): Observable<MediaEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [mid]
    };
    return this.request(httpOptions, '/media/{media}/edit');
  }

  /**
   * Implement resource /entity/media: POST
   * @param media media object to create
   */
  create(media: MediaEntity): Observable<MediaEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/entity/media', media);
  }

  /**
   * Implement resource /media/{media}/edit: PATCH
   * @param mid media id to update
   * @param media media object with required values
   */
  update(mid: number, media: MediaEntity): Observable<MediaEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [mid]
    };
    return this.request(httpOptions, '/media/{media}/edit', media);
  }

  /**
   * Implement resource /media/{media}/edit: DELETE
   * @param mid media id to delete
   */
  delete(mid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [mid]
    };
    return this.request(httpOptions, '/media/{media}/edit');
  }

  /**
   * Implement resource /entity/media_type/{media_type}
   * @param type media type or machine name like audio, image and video
   */
  mediaType(type: string): Observable<MediaType> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [type]
    };
    return this.request(httpOptions, '/entity/media_type/{media_type}');
  }

}
