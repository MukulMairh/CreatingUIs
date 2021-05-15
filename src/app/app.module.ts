import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UI1Component } from './ui1/ui1.component';
import { UI2Component } from './ui2/ui2.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UI1Component,
    UI2Component,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
