import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router,
    public ngZone: NgZone
  ) { }

  changeRoute(name: string): void {
    this.ngZone.run(() => {
      this.router.navigate([name]);
    });
  }

  getCurrentRoute(): string {
    return this.router.url;
  }

}
