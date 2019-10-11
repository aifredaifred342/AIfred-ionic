import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forEach, forIn, isArray } from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  get httpClient(): HttpClient {
    return this._httpClient;
  }

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {}

  get$<T>(url: string, data?: object): Observable<T> {
    const params = this._getHttpParams(data);
    return this._httpClient.get<T>(url, { params });
  }

  post$<T>(url: string, data: object): Observable<any> {
    const headers = this._getHttpHeaders('post');
    return this._httpClient.post<T>(url, data, { headers });
  }

  postForm$<T>(url: string, data: object): Observable<any> {
    const body = this._getHttpParams(data).toString();
    const headers = this._getHttpHeaders('postForm');
    return this._httpClient.post<T>(url, body, { headers });
  }

  put$<T>(url: string, data: object): Observable<any> {
    const headers: HttpHeaders = this._getHttpHeaders('post');
    return this._httpClient.put<T>(url, data, { headers });
  }

  patch$<T>(url: string, data: object): Observable<any> {
    const headers: HttpHeaders = this._getHttpHeaders('post');
    return this._httpClient.patch<T>(url, data, { headers });
  }

  delete$<T>(url: string, data: object): Observable<any> {
    const body = this._getHttpParams(data);
    const headers = this._getHttpHeaders('post');
    return this._httpClient.delete<T>(url, { headers, params: body });
  }

  private _getHttpParams(data: object): HttpParams {
    let retVal: HttpParams = new HttpParams();
    forIn(data, (value: any, key: string) => {
      if (isArray(value)) {
        forEach(value, (v) => (retVal = retVal.append(key, v)));
      } else {
        retVal = retVal.set(key, value);
      }
    });
    return retVal;
  }

  private _getHttpHeaders(headerGroup: 'post' | 'postForm'): HttpHeaders {
    let retVal = new HttpHeaders();
    switch (headerGroup) {
      case 'post':
        retVal = retVal.set('Content-Type', 'application/json');
        break;
      case 'postForm':
        retVal = retVal.set('Content-Type', 'application/x-www-form-urlencoded');
        break;
    }
    return retVal;
  }
}
