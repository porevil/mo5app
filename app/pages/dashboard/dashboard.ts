import { Component } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { NavController, Loading, Popover, Content, NavParams, App } from 'ionic-angular';
import { Portfolio }                from '../../model/portfolio';
import { Portfolios }                from '../../providers/portfolios/portfolios';
import {ProductListPage}	from  '../product-list/product-list';
import {PopoverPage}  from  '../popover/popover';
import {BillingPage}  from  '../billing/billing';
//import {App, Popover, NavController, Content, NavParams} from 'ionic-angular';
/*
  Generated class for the DashboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  providers: [Portfolios],
  templateUrl: 'build/pages/dashboard/dashboard.html',
})
export class DashboardPage {
  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
	items: any = null;
  constructor(private nav: NavController, portfolioService:Portfolios) {

  let loading = Loading.create({
    content: "Loading...",
    duration: 2000
  });

  this.nav.present(loading);

  	this.items = portfolioService.load();
  }

presentPopover(ev) {
    let popover = Popover.create(PopoverPage);

    this.nav.present(popover);
  }

itemTapped(item) {
  console.log(' DashboardPage itemTapped ');
	this.nav.push(ProductListPage, {
	port_no: item.portNo, //get selected course 'id' and send to page course-detail
	account_no: item.accountNo, //get selected course 'title' and send to page course-detail
	client_no: item.clientNo
	});
}

itemButton(item) {
  console.log(' BillingPage itemButton ');
  this.nav.push(BillingPage);
  
}

}
