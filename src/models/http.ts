import { HttpParams, HttpHeaders } from '@angular/common/http';

export type HttpMethods = 'get' | 'put' | 'post' | 'delete';

export type HttpParamsKeyValue = HttpParams | {
  [param: string]: string | string[];
};

export interface HttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParamsKeyValue;
  responseType?: string;
  method?: HttpMethods;
  frags?: string[] | number[];
}
