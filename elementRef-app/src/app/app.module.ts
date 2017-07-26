import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Hello } from './hello.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
