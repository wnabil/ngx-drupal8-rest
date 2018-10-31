import { Injectable } from '@angular/core';

// RXJS
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

// Custom imports
import { HttpOptions, LoginCredentials, LoginResponse, UserEntity } from '../models';
import { BaseService } from './base.service';
import { DrupalConstants } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  /**
   * Implements resource /user/login POST
   * Logs the user in using cookie authentication method
   * @param credentials username and password object style of the user
   */
  login(credentials: LoginCredentials): Observable<LoginResponse> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/user/login', credentials).pipe(tap((response: LoginResponse) => {
      // Save the response connection
      this.saveConnection(response);
    }));
  }

  /**
   * Implements /user/logout POST
   * Logs the user out.
   * Will throw and error if the user is not logged in
   */
  logout(): Observable<null> {
    // if the user is not logged in yet, throw an observable error
    if (!this.isLoggedIn) {
      return throwError('User is not logged in.');
    }

    // set the options and logout token
    const httpOptions: HttpOptions = {
      method: 'post',
      params: {
        '_format': 'json',
        'token': this.connection.logout_token
      }
    };

    // delete the saved connection after logging out
    return this.request(httpOptions, '/user/logout').pipe(tap(this.deleteConnection));
  }

  /**
   * Implement resource /user/{user} GET
   * @param uid the user id
   */
  get(uid: number): Observable<UserEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [uid]
    };
    return this.request(httpOptions, '/user/{user}');
  }

  /**
   * Implement resource /entity/user: POST
   * @param user user object to create
   */
  create(user: UserEntity): Observable<UserEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/entity/user', user);
  }

  /**
   * Implement resource /user/{user}: PATCH
   * @param uid user id to update
   * @param user user object with required values
   */
  update(uid: number, user: UserEntity): Observable<UserEntity> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [uid]
    };
    return this.request(httpOptions, '/user/{user}', user);
  }

  /**
   * Implement resource /user/{user}: DELETE
   * @param uid user id to delete
   */
  delete(uid: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [uid]
    };
    return this.request(httpOptions, '/user/{user}');
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
    // get connection from localstorage
    const connection = localStorage.getItem('connection');
    // parse and return the data
    return <LoginResponse>JSON.parse(connection);
  }

  /**
   * Check if the current connection is expired
   */
  private get connectionExpired(): boolean {
    // get expiration time in ms
    const expiration = +localStorage.getItem('expiration');
    // get current date
    const now = new Date();
    return expiration ? now.getTime() > expiration : true;
  }

  /**
   * save the user login connection in localstorage and constants singleton
   * @param data connection to be saved
   */
  private saveConnection(data: LoginResponse) {
    // set the current session
    DrupalConstants.Connection = data;
    // save the connection in localstorage
    localStorage.setItem('connection', JSON.stringify(data));
    // get current time in ms
    const now = new Date().getTime();
    // get the future expiration time in ms
    const expiration = now + (DrupalConstants.Settings.cookieLifetime * 1000);
    // set the expiration time
    localStorage.setItem('expiration', expiration.toString());
  }

  /**
   * remove the current session details
   */
  private deleteConnection() {
    // empty current session
    DrupalConstants.Connection = undefined;
    // removed saved data
    localStorage.removeItem('connection');
    localStorage.removeItem('expiration');
  }

}
