import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from 'src/app/shared/routing/routing.service';
import { NavService } from '../../../services/nav/nav.service';

@Component({
  selector: 'app-dynamic-breadcrumb',
  templateUrl: './dynamic-breadcrumb.component.html',
  styleUrls: ['./dynamic-breadcrumb.component.scss']
})
export class DynamicBreadcrumbComponent implements OnInit {
  public selectedBreadcrumb: any = null;

  public actionRoute: string;

  private currentRoute: string;
  private breadcrumb: any;
  private navDataUrl = '/assets/json/nav.json';

  constructor(
    private routingService: RoutingService,
    private navService: NavService
  ) {
    this.currentRoute = this.routingService.getCurrentRoute();
  }

  ngOnInit(): void {
    this.navService.getData().then((data) => {
      this.breadcrumb = data;
      this.getBreadcrumbByTitle();
    });
  }

  getBreadcrumbByTitle(): void{
    if (this.currentRoute.split('/').length > 2) {
      this.actionRoute = this.currentRoute.split('/')[2].substring(0, 1).toUpperCase() + this.currentRoute.split('/')[2].substring(1);
    }
    const route = '/' + this.currentRoute.split('/')[1];
    this.breadcrumb.forEach(item => {
      if (item.children) {
        const result = (item.children.find(subItem => subItem.routeName === route));
        if (result !== undefined) {
          this.selectedBreadcrumb = result;
        }
      } else {
        if (item.routeName === route) {
          this.selectedBreadcrumb = item;
        }
      }
    });
  }

  changeRoute(name: string): void {
    this.routingService.changeRoute(name);
  }
}
