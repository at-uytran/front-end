import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainersComponent } from './trainers.component';
import { EmptyDirective } from './empty.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    EmptyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
