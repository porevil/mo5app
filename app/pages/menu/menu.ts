import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {App, MenuController, Nav} from 'ionic-angular';
import { DashboardPage }                from '../../pages/dashboard/dashboard';

/*
  Generated class for the MenuPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
	@ViewChild(Nav) nav: Nav;
	pages: Array<{title: string, component: any}>

   constructor(app: App, menu: MenuController) {
    menu.enable(true);
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },

    ];

  }

openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
