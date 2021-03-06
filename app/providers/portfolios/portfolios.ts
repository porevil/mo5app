import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Portfolio }                from '../../model/portfolio';

/*
  Generated class for the Portfolios provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Portfolios {
  data: any;
  portfolios :Portfolio[];
  constructor(private http: Http) {
    this.portfolios = null;
  }

  load() {
    if (this.portfolios) {
      // already loaded data
      return Promise.resolve(this.portfolios);
    }
    let url = 'http://172.20.221.160:3000/portfolios';
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data, http://172.20.221.160:8100
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.portfolios = data;
          resolve(this.portfolios);
        },err => console.error(err)
        ,() => console.log('done'+this.portfolios[0].model)  

        );
    });
  }
}

