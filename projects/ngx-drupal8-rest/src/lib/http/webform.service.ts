import { Injectable } from "@angular/core";

// RXJS
import { Observable } from "rxjs";

// Custom imports
import { BaseService } from "./base.service";
import {
  HttpOptions,
  WebformEntity,
  WebformFields,
  WebformSubmission,
} from "../models";
import { DrupalConstants } from "../config";

@Injectable()
export class WebformService extends BaseService {
  /**
   * Implement resource 	/webform/{webform} GET
   * @param name the webform machine name
   * @param langCode the language code for the webform
   */
  get(machineName: string, langCode?: string): Observable<WebformEntity> {
    const httpOptions: HttpOptions = {
      method: "get",
      frags: [machineName],
    };
    if (langCode) {
      httpOptions.params = { langcode: langCode };
    }
    return this.request(httpOptions, "/webform/{webform}");
  }

  /**
   * Implement resource /webform_rest/{webform_id}/fields GET
   * @param machineName the webform machine name
   * @param langCode the language code for the webform
   */
  fields(machineName: string, langCode?: string): Observable<WebformFields> {
    const httpOptions: HttpOptions = {
      method: "get",
      frags: [machineName],
    };
    if (langCode) {
      httpOptions.params = { langcode: langCode };
    }
    return this.request(httpOptions, "/webform_rest/{webform_id}/fields");
  }

  /**
   * Implement resource /webform_rest/{webform_id}/submission/{sid} GET
   * @param machineName the webform machine name
   * @param sid the webform submittion id
   */
  getSubmission(
    machineName: string,
    sid: string,
    langCode?: string
  ): Observable<WebformSubmission> {
    const httpOptions: HttpOptions = {
      method: "get",
      frags: [machineName, sid.toString()],
    };
    if (langCode) {
      httpOptions.params = { langcode: langCode };
    }
    return this.request(
      httpOptions,
      "/webform_rest/{webform_id}/submission/{sid}"
    );
  }

  /**
   * Implement resource /webform_rest/{webform_id}/submission/{sid} PATCH
   * @param machineName the webform machine name
   * @param sid the webform submittion id
   * @param webformSubmission the submission content object of fields
   */
  updateSubmission(
    machineName: string,
    sid: string,
    webformSubmission: any
  ): Observable<{ sid: string } | { error: { message: string } }> {
    const httpOptions: HttpOptions = {
      method: "patch",
      frags: [machineName, sid.toString()],
    };
    return this.request(
      httpOptions,
      "/webform_rest/{webform_id}/submission/{sid}",
      webformSubmission
    );
  }

  /**
   * Implement resource /webform_rest/submit POST
   * @param webformSubmission the submission content object of fields
   * All required fields should be added or the request will return error 400 :/
   */
  submit(webformSubmission: {
    webform_id: string;
    [key: string]: any;
  }): Observable<{ sid: string }> {
    const httpOptions: HttpOptions = {
      method: "post",
    };
    return this.request(httpOptions, "/webform_rest/submit", webformSubmission);
  }

  /**
   * Implement resource /webform_rest/{webform_id}/upload/{field_name}: POST
   * @param file the file to upload
   */
  upload(machineName: string, fieldName: string, file: File) {
    const httpOptions: HttpOptions = {
      method: "post",
      frags: [machineName, fieldName],
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `file; filename="${file.name}"`,
      },
    };

    // If the user is logged in, add the CSRF header token
    if (DrupalConstants.Connection && DrupalConstants.Connection.csrf_token) {
      httpOptions.headers["X-CSRF-Token"] =
        DrupalConstants.Connection.csrf_token;
    }
    return this.request(
      httpOptions,
      "/webform_rest/{webform_id}/upload/{field_name}",
      file
    );
  }
}
