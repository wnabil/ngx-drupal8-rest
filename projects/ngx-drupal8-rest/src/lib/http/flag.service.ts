import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, FlagRegisteration, FlagEntity } from '../models';

@Injectable()
export class FlagService extends BaseService {

  /**
   * Implement resource /entity/flagging/{flagging}: GET
   * @param fid the flag id
   */
  get(fid: number): Observable<FlagEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [fid]
    };
    return this.request(httpOptions, '/entity/flagging/{flagging}');
  }

  /**
   * Implement resource /entity/flagging: POST
   * @param flag: flag content
   */
  post(flag: FlagRegisteration): Observable<FlagEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/entity/flagging', flag);
  }

  update(fid: number, flag: FlagEntity): Observable<FlagEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [fid]
    };
    return this.request(httpOptions, '/entity/flagging/{flagging}', flag);
  }

  delete(fid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [fid]
    };
    return this.request(httpOptions, '/entity/flagging/{flagging}');
  }

}
