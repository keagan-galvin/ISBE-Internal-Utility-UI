import {
  Injectable
} from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RouterOutlet
} from '@angular/router';
import {
  Title
} from '@angular/platform-browser';
import {
  Subject
} from 'rxjs';

import {
  MenuItem
} from '../models/menu-item';
import {
  Navigation
} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {

  private activeRoute = new Subject < String > ();
  activeRoute$ = this.activeRoute.asObservable();

  private routeChildren = new Subject < MenuItem[] > ();
  routeChildren$ = this.routeChildren.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const parentPath = this.activatedRoute.firstChild.routeConfig.path;
        this.activatedRoute.firstChild.data.subscribe(data => {
          this.activeRoute.next(data.title);
        });

        this.routeChildren.next(this.activatedRoute.firstChild.routeConfig.children.map(
          route => {
            return new MenuItem({
              path: parentPath + '/' + route.path,
              title: route.data.title
            });
          }
        ));
      }
    });
  }

  getMenuItems(): MenuItem[] {
    return this.router.config
      .filter(route => route.data && route.data.title)
      .map(route => {
        return {
          path: route.path,
          title: route.data.title
        };
      });
  }
}
