import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Custom imports
import { BaseService } from './base.service';
import { HttpOptions, WebformEntity, WebformFields, WebformSubmission } from '../models';

@Injectable()
export class WebformService extends BaseService {

  /**
   * Implement resource 	/webform/{webform} GET
   * @param name the webform machine name
   */
  get(machineName: string): Observable<WebformEntity> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [machineName]
    };
    return this.request(httpOptions, '/webform/{webform}');
  }

  /**
   * Implement resource /webform_rest/{webform_id}/fields GET
   * @param machineName the webform machine name
   */
  fields(machineName: string): Observable<WebformFields> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [machineName]
    };
    return this.request(httpOptions, '/webform_rest/{webform_id}/fields');
  }

  /**
   * Implement resource /webform_rest/{webform_id}/submission/{sid} GET
   * @param machineName the webform machine name
   * @param sid the webform submittion id
   */
  getSubmission(machineName: string, sid: string): Observable<WebformSubmission> {
    const httpOptions: HttpOptions = {
      method: 'get',
      frags: [machineName, sid.toString()]
    };
    return this.request(httpOptions, '/webform_rest/{webform_id}/submission/{sid}');
  }

  /**
   * Implement resource /webform_rest/{webform_id}/submission/{sid} PATCH
   * @param machineName the webform machine name
   * @param sid the webform submittion id
   * @param webformSubmission the submission content object of fields
   */
  updateSubmission(machineName: string, sid: string, webformSubmission: any): Observable<{ sid: string } | { error: { message: string } }> {
    const httpOptions: HttpOptions = {
      method: 'patch',
      frags: [machineName, sid.toString()]
    };
    return this.request(httpOptions, '/webform_rest/{webform_id}/submission/{sid}', webformSubmission);
  }

  /**
   * Implement resource /webform_rest/submit POST
   * @param webformSubmission the submission content object of fields
   * All required fields should be added or the request will return error 400 :/
   */
  submit(webformSubmission: { webform_id: string, [key: string]: any }): Observable<{ sid: string }> {
    const httpOptions: HttpOptions = {
      method: 'post',
    };
    return this.request(httpOptions, '/webform_rest/submit', webformSubmission);
  }
}
