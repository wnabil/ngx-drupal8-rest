import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, FileEntity } from '../models';
import { DrupalConstants } from '../config';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {

  /**
   * Implement resource /entity/file/{file}: GET
   * @param fid the file id
   */
  get(fid: number): Observable<FileEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [fid]
    };
    return this.request(httpOptions, '/entity/file/{file}');
  }

  /**
   * Implement resource /file/upload/{entity_type_id}/{bundle}/{field_name}: POST
   * @param file the file to create
   */
  upload(entityType: string, bundle: string, fieldName: string, file: File): Observable<FileEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
      frags: [entityType, bundle, fieldName],
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `filename="${file.name}"`
      },
    };

    // If the user is logged in, add the CSRF header token
    if (DrupalConstants.Connection && DrupalConstants.Connection.csrf_token) {
      httpOptions.headers['X-CSRF-Token'] = DrupalConstants.Connection.csrf_token;
    }
    return this.request(httpOptions, '/file/upload/{entity_type_id}/{bundle}/{field_name}', file);
  }

  /**
   * Implement resource /entity/file/{file}: PATCH
   * @param fid the file id
   * @param file the file content to be updated
   */
  update(fid: number, file: FileEntity): Observable<FileEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [fid],
    };

    return this.request(httpOptions, '/entity/file/{file}', file);
  }

  /**
   * Implement resource /entity/file/{file}: DELETE
   * @param fid the file id
   */
  delete(fid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [fid],
    };

    return this.request(httpOptions, '/entity/file/{file}');
  }
}
