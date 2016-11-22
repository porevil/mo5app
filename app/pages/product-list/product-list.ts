import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductList } from '../../providers/product-list/product-list';
import { Portfolio }                from '../../model/portfolio';
import {LoanPage}  from  '../../pages/loan/loan';

/*
  Generated class for the ProductListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	providers: [ProductList],
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {
	portfolio: Portfolio;
	port: number;
	account: string;
	client: string;
	items: any = null;

  constructor(private nav: NavController, private navParams: NavParams, items: ProductList) {
  	console.log(' ProductListPage constructor ');
  	this.nav = nav;
//  	this.portfolio.portNo = navParams.get('port_no'); 
//  	this.portfolio.accountNo = navParams.get('account_no'); 
//  	this.portfolio.clientNo = navParams.get('client_no'); 

	this.port = navParams.get('port_no'); 
	this.account = navParams.get('account_no');
	this.client = navParams.get('client_no');
	this.items = items.load(this.port); 

  }

buttonClicked(item) {
  console.log(' ProductList buttonClicked ');
	this.nav.push(LoanPage);
}

}
