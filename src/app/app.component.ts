import {
  Component,
  OnInit
} from '@angular/core';
import {
  AppNavService
} from './services/nav-service.service';

import {
  MenuItem
} from './models/menu-item';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppNavService]
})
export class AppComponent implements OnInit {
  appTitle = 'ISBE Boiler Plate';
  appDrawer = false;
  useAppDrawer = true;
  currentDate = new Date();
  version = 'Version 0.0.0';
  opened = true;
  useAppMenu = false;

  appMenu: MenuItem[];
  activeRoute: String;
  routeChildren: MenuItem[];

  constructor(private appNavService: AppNavService) {

    appNavService.routeChildren$.subscribe(children => {
      this.routeChildren = children;
    });

    appNavService.activeRoute$.subscribe(route => {
      this.activeRoute = route;
    });

  }

  ngOnInit() {
    this.appMenu = this.appNavService.getMenuItems();
    this.useAppMenu = this.appMenu.length > 1;
    this.opened = this.useAppMenu;
  }
}
