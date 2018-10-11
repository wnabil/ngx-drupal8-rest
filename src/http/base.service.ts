import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { HttpOptions } from '../models';
import { DrupalConstants } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  protected request(options: HttpOptions, resource: string, body?): Observable<any> {
    const structuredResource = this.structureResource(resource, options.frags);

    let request: Observable<Object>;
    const httpOptions = this.httpOptions(options);
    if (options.method === 'put' || options.method === 'post') {
      request = this.httpClient[options.method](structuredResource, body, httpOptions);
    } else {
      request = this.httpClient[options.method](structuredResource, httpOptions);
    }

    return request.pipe(timeout(DrupalConstants.Settings.requestTimeout));
  }

  private httpOptions(options: HttpOptions) {
    const httpOptions: any = {
      reportProgress: true,
      withCredentials: true,
      responseType: 'json',
      params: {
        '_format': 'json'
      },
      headers: {
        // 'X-CSRF-Token': this.savedVariable('token'),
      }
    };
    if (options.params) {
      httpOptions.params = options.params;
    }
    if (options.responseType) {
      httpOptions.responseType = options.responseType;
    }
    if (options.headers) {
      httpOptions.headers = options.headers;
    }
    return httpOptions;
  }

  private savedVariable(variableName: string) {
    return '';
  }

  /**
   * get full resource structure after adding the frags
   * @param resource drupal base resource url
   * @param frags frags to change it with the value that inside brackets
   */
  private structureResource(resource: string, frags: string[] | number[] = []): string {
    // if there is no custom frags
    if (frags.length === 0) {
      return DrupalConstants.backEndUrl + resource;
    }
    // split the resource to fragments
    const resourceParts = resource.split('/');
    // init empty string
    let resourceFrags = '';
    // check for each frag and replace it
    resourceParts.forEach((part, index) => {
      // if the part is a frag
      if (part[0] === '{') {
        // get the value from frags array and remove it
        resourceFrags += `/${frags.shift()}`;
      } else {
        // if part is not a frag add it directly
        resourceFrags += `/${part}`;
      }
    });
    // remove duplicate / at the start of the resource
    resourceFrags = resourceFrags.substr(1);
    return DrupalConstants.backEndUrl + resourceFrags;
  }
}
