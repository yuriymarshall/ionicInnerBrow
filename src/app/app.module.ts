import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import * as firebase from 'firebase';

import {MyApp} from './app.component';
import {InAppBrowser} from "@ionic-native/in-app-browser";

firebase.initializeApp({
  apiKey: "AIzaSyDFfnZoHQVrxxoP59xjKCmrybwFNX-HxH8",
  authDomain: "ionicform-ac9e3.firebaseapp.com",
  databaseURL: "https://ionicform-ac9e3.firebaseio.com",
  projectId: "ionicform-ac9e3",
  storageBucket: "ionicform-ac9e3.appspot.com",
  messagingSenderId: "909457742599"
});

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor() {
  }
}
