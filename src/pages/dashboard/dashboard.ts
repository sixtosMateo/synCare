import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {DashboardDetailsService} from "../../app/services/dashboardDetails.service";
import {DashboardDetails} from "../../app/services/dashboardDetails";
import {LoginPage} from "../login/login";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  posts: any;
  posts1: any;
  posts2: any;
  posts3: any;
  posts4: any;
  posts7: 0;
  amount: any;
  currency: string;
  date: string;
  nameU: any;
  historyshops: any;
  constructor(public navCtrl: NavController,public http: Http, public navPara: NavParams ){
    this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(res => res.json()).subscribe(data => {
      console.log("I'm in dashboard page");

      // this.navCtrl.setRoot(this.navCtrl.getActive().component)

      this.nameU= this.navPara.get('title');

      // create function get varibles needed
      
      data.forEach(r => {
        if(r.username == this.nameU)
          { 
            this.posts=r.fullname;
            this.posts1=r.username;
            this.posts2=r.email;
            this.posts3=r.percent;
            this.posts4=r.uid
          
          }
      });

      this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=getX&uid=' + this.posts4).map(res => res.json()).subscribe(data => {
        this.historyshops= data.filter(x => x.type !== 'total');

        data.sort().forEach(r => {
          if(r.type === "request" )
            { 
              this.amount = r.amount;
              this.currency =r.currency;
              this.date = r.date;
            }
          if(r.type === 'total') {
            console.log('===> ', r)
            this.posts7 = r.amount;
          }
            
        });
       });
      
  });

  

  
  }
  
}
