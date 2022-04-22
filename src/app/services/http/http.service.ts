import { Injectable, NgZone } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: any;

  constructor(
    public ngZone: NgZone,
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  getHttpOptions(type: string): void {
    if (type === 'form'){
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded'
        })
      };
    }
  }

  getRequest(host: string, uri?: string, queryString?: string, type?: string): Observable<any> {
    if (uri === undefined) {
      uri = '';
    }
    if (queryString === undefined) {
      queryString = '';
    }
    if (type !== undefined){
      this.getHttpOptions(type);
    }
    return this.http.get(host + uri + '?' + queryString, this.httpOptions);
  }

  postRequest(host: string, uri?: string, data?: any, type?: string): Observable<any> {
    if (uri === undefined) {
      uri = '';
    }
    if (data === undefined) {
      data = '';
    }
    if (type !== undefined){
      this.getHttpOptions(type);
    }
    return this.http.post(host + uri, JSON.stringify(data), this.httpOptions);
  }

  putRequest(host: string, uri?: string, data?: any, type?: string): Observable<any> {
    if (uri === undefined) {
      uri = '';
    }
    if (data === undefined) {
      data = '';
    }
    if (type !== undefined){
      this.getHttpOptions(type);
    }
    return this.http.put(host + uri, JSON.stringify(data), this.httpOptions);
  }

}
