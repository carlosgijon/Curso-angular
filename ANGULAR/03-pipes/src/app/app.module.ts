import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

import { AppComponent } from './app.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
