import { Component, OnChanges,ViewChild, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';
import { TrainerShowComponent } from './trainer_show.component';

@Component({
  selector: 'trainers',
  templateUrl:  'trainers.component.html',
    styleUrls: ['./app.component.css'],
  providers: [TrainersService]
})
export class TrainersComponent {
  trainers: any;
  trainer: any;
@ViewChild(TrainerShowComponent) info: TrainerShowComponent;
  constructor(private trainersService: TrainersService) {
      this.trainersService.getData().subscribe( (data: any) =>{
        this.trainers = data.trainers;
      });
  }

  getDetail(id: number) {
    this.info.show(id);
    // this.trainersService.getDetail().subscribe((data: any) => {
    //         this.trainer = data.trainers[id];
      // });
  }
}
