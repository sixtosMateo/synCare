import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  private todo : FormGroup;

  constructor( public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm(){
   console.log(this.todo.value.title);

    this.navCtrl.push(DashboardPage,{title: this.todo.value.title});
  }
}
