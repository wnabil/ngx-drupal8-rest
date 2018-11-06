import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

// Custom imports
import { HttpOptions } from '../models';
import { DrupalConstants } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Main method for implementing all the HttpClient requests and return the results
   * @param options Custom HttpOptions to be overrided
   * @param resource The resource url, Token frags will be replaced from options.frags, EX: {'/user/{uid}'}
   * @param body the content to be sent with the request, Only for patch and post methods
   */
  protected request(options: HttpOptions, resource: string, body?): Observable<any> {
    // Get full url
    const structuredResource = this.structureResource(resource, options.frags);

    let request: Observable<Object>;
    // Init http options
    const httpOptions = this.httpOptions(options);

    // Use the desired method
    if (options.method === 'patch' || options.method === 'post') {
      request = this.httpClient[options.method](structuredResource, body, httpOptions);
    } else {
      request = this.httpClient[options.method](structuredResource, httpOptions);
    }

    // Set requests time out from drupal config
    return request.pipe(timeout(DrupalConstants.Settings.requestTimeout));
  }

  /**
   * Get default HttpOptions or replace the custom ones.
   * Supports url params, responseType, headers, observer
   * @param options Custom httpOptions to override the defaults
   */
  private httpOptions(options: HttpOptions) {
    // Init default options
    const httpOptions: any = {
      reportProgress: true, // allow for progress
      withCredentials: true,
      responseType: 'json',
      params: {
        '_format': 'json' // required by drupal 8 rest
      },
      headers: {},
      observe: 'body',
    };

    // If the user is logged in, add the CSRF header token
    if (DrupalConstants.Connection && DrupalConstants.Connection.csrf_token) {
      httpOptions.headers['X-CSRF-Token'] = DrupalConstants.Connection.csrf_token;
    }

    // Override defaults
    if (options.params) {
      httpOptions.params = options.params;
    }
    if (options.responseType) {
      httpOptions.responseType = options.responseType;
    }
    if (options.headers) {
      httpOptions.headers = options.headers;
    }
    if (options.observe) {
      httpOptions.observe = options.observe;
    }

    return httpOptions;
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
