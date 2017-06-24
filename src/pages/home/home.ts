import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaginapruebaPage} from '../paginaprueba/paginaprueba';
import { AngularFireDatabase, FirebaseListObservable } from 'angularFire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

nextPage(){
  this.navCtrl.push(PaginapruebaPage);
} 

}
  


