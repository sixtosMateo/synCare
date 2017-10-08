import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ParticipatePage } from '../participate/participate';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  private todo : FormGroup;

  category: any;

  total: number;
  username: any;
  amount: number;

  currency: any;

  private urlParameters: Array<any> = [];

  constructor( public navCtrl: NavController, private formBuilder: FormBuilder ) {
    console.log("IN login page");
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm(){
   console.log(this.todo.value.title);

    this.navCtrl.push(DashboardPage,{title: this.todo.value.title});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipatePage');
    // console.log(this.navParams.get('title'));
    // console.log("here: " + this.dataService.getRemoteData());

    if (document.URL.indexOf("?") > 0) {

       console.log(document.URL);

	     let splitURL = document.URL.split("?");
	     let splitParams = splitURL[1].split("&");
	     let i: any;
       for (i in splitParams){

         var valuableParam = false;

         let singleURLParam = splitParams[i].split('=');

         console.log(splitParams);

		     if (singleURLParam[0] == "username"){
           this.username = singleURLParam[1];
           valuableParam = true;
         }
		     if (singleURLParam[0] == "amount"){
           this.amount = +singleURLParam[1];
           valuableParam = true;
         }
         if (singleURLParam[0] == "currency"){
           this.currency = singleURLParam[1];
           valuableParam = true;
         }
		     if (singleURLParam[0] == "category"){
           this.category = singleURLParam[1];
           valuableParam = true;
         }
         if (singleURLParam[0] == "total"){
           this.total = +singleURLParam[1];
           valuableParam = true;
         }

         let urlParameter = {
           'name': singleURLParam[0],
           'value': singleURLParam[1]
         };

         if(valuableParam){
           this.urlParameters.push(urlParameter);
         }

         console.log("url params: " + this.urlParameters);
       }

       if(this.urlParameters.length == 0){
         console.log("empty list");
        //  this.goToDashboard();
       }else{
         console.log("array list not empty")
         this.goToParticipationPage();
       }
     }
   }

   goToParticipationPage(){
    //  title: 'sudo title',
    //  information: [
    //    'name', 'id'
    //  ],
    //  time: '10:10am'
     let data = {
       "total": this.total,
       "category": this.category,
       "amount": this.amount,
       "currency": this.currency,
       "username": this.username
     };

     this.navCtrl.push(ParticipatePage, data);
   }

   goToDashboard(){
    //  title: 'sudo title',
    //  information: [
    //    'name', 'id'
    //  ],
    //  time: '10:10am'
    //  let data = {
    //    "total": this.total,
    //    "category": this.category,
    //    "amount": this.amount,
    //    "currency": this.currency,
    //    "username": this.username
    //  };

     this.navCtrl.push(DashboardPage);
   }
}
