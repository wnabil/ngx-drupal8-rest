import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions } from '../models';

@Injectable()
export class FlagService extends BaseService {

  /**
   * Implement resource /entity/flagging/{flagging}: GET
   * @param fid the file id
   */
  get() {

  }

  /**
   * Implement resource /entity/flagging: POST
   * @param flag: flag content
   */
  post(flag: any) {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/entity/flagging', flag);
  }

}
