import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SystemAccountService {

  private dataUrl: string = '/assets/json/system-account.json';
  private dataHeaderurl: string = '/assets/json/systemAccountHeaderJson.json';

  constructor(
    private httpService: HttpService
  ) { }

  getData(): Promise<any> {
    return this.httpService.getRequest(this.dataUrl).toPromise();
  }

  getTableHeader(): Promise<any> {
    return this.httpService.getRequest(this.dataHeaderurl).toPromise();
  }

}