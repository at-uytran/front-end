import { Component, OnChanges, ViewChild, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';
import { TrainersComponent } from './trainers.component';
import { TrainerShowComponent } from './trainer_show.component'
// import {Observable} from 'rxjs/Observable';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl:  'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrainersService]
})
export class AppComponent implements OnChanges{
  trainers: any;
  trainer: any;
@ViewChild(TrainerShowComponent) info: TrainerShowComponent;
  constructor(private trainersService: TrainersService) {
      this.trainersService.getData().subscribe( (data: any) =>{
        this.trainers = data.trainers;
      });
  }
ngOnInit() {}

ngOnChanges() {
    this.trainers = null;
    setTimeout( () => {
      this.trainersService.getData().subscribe((data: any) => {
            this.trainers = data.trainers;
      });
    });
  }

  getDetail(id: number) {
    this.trainersService.getDetail().subscribe((data: any) => {
            this.trainer = data.trainers[id];
      });
  }
}
