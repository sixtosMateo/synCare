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
  posts3:any;
  nameU: any;
  historyshop:any;
  constructor(public navCtrl: NavController,public http: Http, public navPara: NavParams ){
    this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=users').map(res => res.json()).subscribe(data => {
      
      this.nameU= this.navPara.get('title');
      
      data.forEach(r => {
        if(r.username == this.nameU)
          { 
            this.posts=r.fullname;
            this.posts1=r.username;
            this.posts2=r.email;
            this.posts3=r.percent;
          
          }
      });


      
  });
  this.http.get('http://home.loosescre.ws/~keith/synCare/server.php?command=getX&uid=1').map(res => res.json()).subscribe(data => {
    
    
    
    data.forEach(r => {
      if(r.username == this.nameU)
        { 
          this.posts=r.fullname;
          this.posts1=r.username;
          this.posts2=r.email;
          this.posts3=r.percent;
        
        }
    });

   //console.log(this.navPara.get('title'))
  }
  
}
