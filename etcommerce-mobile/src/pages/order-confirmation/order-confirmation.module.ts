import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfirmationPage } from './order-confirmation';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    OrderConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmationPage),
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    }
  ],
})
export class OrderConfirmationPageModule {}
