import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmptyDirective } from './empty.directive';
import { Http, HttpModule } from '@angular/http';
import { DefaultAvatarDirective } from './default_avatar.directive';
import { TrainersService } from './trainers.service'


@NgModule({
  declarations: [
    AppComponent,
    EmptyDirective,
    DefaultAvatarDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TrainersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
