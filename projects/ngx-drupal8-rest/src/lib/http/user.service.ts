import { Injectable } from '@angular/core';

// RXJS
import { Observable, throwError } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

// Custom imports
import { HttpOptions, LoginCredentials, LoginResponse, UserEntity } from '../models';
import { BaseService } from './base.service';

@Injectable()
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
    return this.request(httpOptions, '/user/login', credentials).pipe(mergeMap((response: LoginResponse) => {
      return this.getToken().pipe(map((token: string) => {
        // Save the response connection
        this.saveConnection(response, token);
        return response;
      }));
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
    return this.request(httpOptions, '/user/logout').pipe(tap(this.deleteConnection), catchError((err) => {
      if (err && err.status === 403) {
        this.deleteConnection();
      }
      throw err;
    }));
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
     * Implement resource /user/register: POST
     * @param user user info object to register
     */
  register(user: { name: string[], pass: string[], mail: string[], [key: string]: string[] }): Observable<UserEntity> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/user/register', user);
  }

}
