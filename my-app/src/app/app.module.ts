import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainersComponent } from './trainers.component';
import { EmptyDirective } from './empty.directive';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    EmptyDirective,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
