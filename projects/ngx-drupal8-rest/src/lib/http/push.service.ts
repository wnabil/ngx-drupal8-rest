import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, PushRegistration, PushRegisterationResponse } from '../models';

@Injectable()
export class PushService extends BaseService {

  register(registration: PushRegistration): Observable<PushRegisterationResponse> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/entity/push_notifications_token', registration);
  }

  get(tokenId: number): Observable<PushRegisterationResponse> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [tokenId]
    };
    return this.request(httpOptions, '/push_notifications/token/{push_notifications_token}');
  }

  update(tokenId: number, registration: PushRegistration): Observable<PushRegisterationResponse> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [tokenId]
    };
    return this.request(httpOptions, '/push_notifications/token/{push_notifications_token}', registration);
  }

  delete(tokenId: number): Observable<null> {
    const httpOptions: HttpOptions = {
      method: 'delete',
      frags: [tokenId]
    };
    return this.request(httpOptions, '/push_notifications/token/{push_notifications_token}');
  }

}
