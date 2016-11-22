import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Products }                from '../../model/product-list';
import { Portfolio }                from '../../model/portfolio';

/*
  Generated class for the ProductList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductList {
  data: any;
  productList: Products[];
  constructor(private http: Http) {
    this.data = null;
  }

  load(port:number) {
    console.log(' productList load... ');
    if (this.productList) {
      // already loaded data
      return Promise.resolve(this.productList);
    }
    let url = 'http://172.20.221.160:3001/productList';
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.productList = data;
          resolve(this.productList);
        },err => console.error(err)
        ,() => console.log('load data done : '+this.productList[0].productCode)  
        );
    });
  }
}

