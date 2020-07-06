import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    }
  ],
})
export class ProdutosPageModule {}
