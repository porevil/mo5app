import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { Customer } from '../../providers/customer/customer';
import { DashboardPage }                from '../../pages/dashboard/dashboard';
import {
FormBuilder,
Validators,
ControlGroup,
FORM_DIRECTIVES,
} from '@angular/common';

/*
  Generated class for the CustomerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
providers: [Customer],
directives: [FORM_DIRECTIVES],
templateUrl: 'build/pages/customer/customer.html',
})

export class CustomerPage {
	memberForm: ControlGroup;

 constructor(private nav: NavController, private fb: FormBuilder, private customer: Customer) {
	this.nav = nav;
	this.customer = customer;

	this.memberForm = fb.group({
	username: ["", Validators.required], 
	password: ["", Validators.compose([Validators.required,Validators.minLength(4)])]
	});
	}


	addMember(event) {
		//let fullname = this.memberForm.controls['fullname'].value;
		let username = this.memberForm.controls['username'].value;
		let password = this.memberForm.controls['password'].value;
		//console.log(fullname);
		console.log(username);
		console.log(password);
		let alert = Alert.create({
		title: 'Welcome',
		subTitle: 'My Tisco My Car', //message เป็นค่าที􀀮ส่งกลับมาจาก Backend
		buttons: ['ok']
		});

		this.nav.push(DashboardPage);
	}

  }


