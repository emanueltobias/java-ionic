import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Etcommerce } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriaService } from './../services/model/categoria.service';

@NgModule({
  declarations: [
    Etcommerce
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(Etcommerce),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Etcommerce
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService
  ]
})
export class AppModule {}
