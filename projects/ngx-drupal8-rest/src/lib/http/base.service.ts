import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';
import { timeout, mergeMap, tap } from 'rxjs/operators';

// Custom imports
import { HttpOptions, LoginResponse } from '../models';
import { DrupalConstants } from '../config';
import { isPlatformServer} from '@angular/common';

@Injectable()
export class BaseService {

  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platform: string,
  ) { }

  getToken(): Observable<string> {
    const tokenOptions: HttpOptions = {
      method: 'get',
      responseType: 'text'
    };
    return this.request(tokenOptions, '/session/token').pipe(tap(token => {
      if (DrupalConstants.Token && token !== DrupalConstants.Token) {
        this.deleteConnection();
      }
      DrupalConstants.Token = token;
      DrupalConstants.TokenInit = true;
      return token;
    }));
  }

  /**
   * Check for current user if logged in or not.
   * Based on current connection and expiration date
   */
  get isLoggedIn(): boolean {
    // if the connection expired, delete the connection
    if (this.connectionExpired) {
      this.deleteConnection();
      return false;
    }

    return DrupalConstants.Connection ? true : false;
  }

  /**
   * Get current user login connection
   */
  get connection(): LoginResponse {
    if (!isPlatformServer(this.platform)) {
      DrupalConstants.Token = localStorage.getItem('token');
      // get connection from localstorage
      const connection = localStorage.getItem('connection');
      // parse and return the data
      return <LoginResponse>JSON.parse(connection);
    }
  }

  /**
   * Check if the current connection is expired
   */
  protected get connectionExpired(): boolean {
    if (!isPlatformServer(this.platform)) {
      // get expiration time in ms
      const expiration = +localStorage.getItem('expiration');
      // get current date
      const now = new Date();
      return expiration ? now.getTime() > expiration : true;
    }
  }

  /**
   * save the user login connection in localstorage and constants singleton
   * @param data connection to be saved
   */
  protected saveConnection(data: LoginResponse, token: string) {
    if (!isPlatformServer(this.platform)) {
      // set the current session
      DrupalConstants.Connection = data;
      DrupalConstants.Token = token;
      // save the connection in localstorage
      localStorage.setItem('connection', JSON.stringify(data));
      // get current time in ms
      const now = new Date().getTime();
      // get the future expiration time in ms
      const expiration = now + (DrupalConstants.Settings.cookieLifetime * 1000);
      // set the expiration time
      localStorage.setItem('expiration', expiration.toString());
      localStorage.setItem('token', token);
    }
  }

  /**
   * remove the current session details
   */
  protected deleteConnection() {
    if (!isPlatformServer(this.platform)) {
      // empty current session
      DrupalConstants.Connection = undefined;
      DrupalConstants.Token = undefined;
      // removed saved data
      localStorage.removeItem('connection');
      localStorage.removeItem('expiration');
      localStorage.removeItem('token');
    }
  }

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
    if (resource !== '/session/token' && !DrupalConstants.TokenInit) {
      return this.getToken().pipe(mergeMap(
        () => request.pipe(timeout(DrupalConstants.Settings.requestTimeout))
      ));
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
