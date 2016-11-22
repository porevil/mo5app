import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Loan} from '../../model/loan';
import {Loans} from '../../providers/loan/loans';
/*
  Generated class for the LoanPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	providers: [Loans],
  templateUrl: 'build/pages/loan/loan.html',
})
export class LoanPage {
	port : string;
	loanItem: any = null;
  constructor(private nav: NavController, private navParams: NavParams, items: Loans) {
  	this.nav = nav;
  	console.log(' LoanPage loaded ');
  	this.loanItem = items.load(); 
  	console.log(' loanItem loaded ');

  }

}
