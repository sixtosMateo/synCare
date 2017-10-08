import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  posts: any = [];

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getRemoteData(){
    this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(res => res.json()).subscribe(data =>{
      // console.log(data);
      // console.log(data[0]);
      // i is the user index in the response array
      this.posts = data;

      // let i = 0;
      // let jsonData = data[i];


      // jsondata = data[0];
      // console.log(jsonData['username']);
      console.log(data);
      // return jsonData['role'];

    });

  }

}
