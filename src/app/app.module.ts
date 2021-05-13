import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UI1Component } from './ui1/ui1.component';
import { UI2Component } from './ui2/ui2.component';

@NgModule({
  declarations: [
    AppComponent,
    UI1Component,
    UI2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
