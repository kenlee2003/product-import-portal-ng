import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RoutingService } from '../../routing/routing.service';
import { NavService } from '../../../services/nav/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public showNav = false;
  public autoNav = true;
  public activeSubNav: string[] = [];
  public navData: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private routingService: RoutingService,
    private navService: NavService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('fixed-nav') !== null) {
      this.renderer.addClass(this.document.body, 'fixed-nav');
      this.autoNav = false;
      this.showNav = true;
    }
    this.navService.getData().then((data) => {
      this.navData = data;
    });
  }

  changeRoute(name: string): void {
    this.routingService.changeRoute(name);
  }

  triggerSubNav(name: string): void {
    if (this.activeSubNav.indexOf(name) === -1) {
      this.activeSubNav.push(name);
    } else {
      this.activeSubNav.splice(this.activeSubNav.indexOf(name), 1);
    }
  }

  navStatus(): void {
    if (this.autoNav) {
      this.renderer.addClass(this.document.body, 'fixed-nav');
      localStorage.setItem('fixed-nav', '1');
      this.autoNav = false;
      this.showNav = true;
    } else {
      this.renderer.removeClass(this.document.body, 'fixed-nav');
      localStorage.removeItem('fixed-nav');
      this.autoNav = true;
      this.showNav = false;
    }
  }
}
