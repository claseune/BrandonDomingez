import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PaginapruebaPage } from '../pages/paginaprueba/paginaprueba';


export const config = {
    apiKey: "AIzaSyBC7Z2YomPEK8cbN0gooUyEKzNnGdD6aFk",
    authDomain: "apptour-71f4d.firebaseapp.com",
    databaseURL: "https://apptour-71f4d.firebaseio.com",
    projectId: "apptour-71f4d",
    storageBucket: "apptour-71f4d.appspot.com",
    messagingSenderId: "34574887884"
  };

  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaginapruebaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginapruebaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
