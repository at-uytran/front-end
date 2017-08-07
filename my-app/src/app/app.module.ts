import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmptyDirective } from './empty.directive';
import { HttpModule } from '@angular/http';
import { DefaultAvatarDirective } from './default_avatar.directive';
import { TrainersService } from './trainers.service'
import { TrainersComponent } from './trainers.component';
import { TrainerShowComponent } from './trainer_show.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyDirective,
    DefaultAvatarDirective,
    TrainersComponent,
    TrainerShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TrainersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
