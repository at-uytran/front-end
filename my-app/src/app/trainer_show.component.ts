import { Component, OnChanges, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';

@Component({
  selector: 'trainer-show',
  templateUrl:  'trainer_show.component.html',
    styleUrls: ['./app.component.css'],
  providers: [TrainersService]
})
export class TrainerShowComponent {
  trainers: any;
  trainer: any;
  hidden: boolean = true;
// @ViewChild(ShowInfoComponent) info: ShowInfoComponent;
  constructor(private trainersService: TrainersService) {
      this.trainersService.getData().subscribe( (data: any) =>{
        this.trainers = data.trainers;
      });
  }

  show(id: number) {
            this.trainer = this.trainers[id];
    // this.hidden= false;
  }
}
