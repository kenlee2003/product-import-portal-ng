import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private navDataUrl: string = '/assets/json/nav.json';

  constructor(
    private httpService: HttpService
  ) { }

  getData(): Promise<any> {
    return this.httpService.getRequest(this.navDataUrl).toPromise();
  }

}