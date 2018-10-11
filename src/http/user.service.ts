import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpOptions, LoginCredentials, LoginResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  login(credentials: LoginCredentials) {
    const options: HttpOptions = {
      method: 'post',
    };
    return this.request(options, '/user/login', credentials);
  }

  /**
   * implement resource /user/{user} GET
   * @param uid the user id
   */
  get(uid: number): Observable<LoginResponse> {
    const options: HttpOptions = {
      method: 'get',
      frags: [uid]
    };
    return this.request(options, '/user/{user}');
  }

  create(user) {

  }

  update(uid: number, user) {

  }

  delete(uid: number) {

  }

}
