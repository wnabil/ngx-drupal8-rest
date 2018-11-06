import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { ViewOptions, HttpOptions, ViewEntity } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ViewService extends BaseService {

  /**
   * Implements /entity/view/{view}: GET
   * Get view result
   * @param machineName view machine name
   */
  getView(machineName: string): Observable<ViewEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [machineName],
    };
    return this.request(httpOptions, '/entity/view/{view}');
  }

  /**
   * Implements Views rest export
   * Returns array of view rows
   * @param viewPath the view url path, EX: '/view/my_custom_view_path'
   */
  get(viewPath: string, viewOptions: ViewOptions = {}): Observable<any[]> {
    const httpOptions: HttpOptions = {
      method: 'get',
      params: {
        '_format': 'json'
      }
    };

    if (viewOptions.args) {
      viewPath += '/' + viewOptions.args.join('/');
    }

    if (viewOptions.filters) {
      httpOptions.params = { ...httpOptions.params, ...viewOptions.filters };
    }

    if (viewOptions.pagination) {
      httpOptions.params = { ...httpOptions.params, ...viewOptions.pagination };
    }


    if (viewOptions.sorting) {
      httpOptions.params = { ...httpOptions.params, ...viewOptions.sorting };
    }

    return this.request(httpOptions, viewPath);
  }
}
