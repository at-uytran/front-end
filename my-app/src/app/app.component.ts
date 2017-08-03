import { Component, OnChanges, OnInit } from '@angular/core';
import { TrainersService } from './trainers.service';
// import { ShowInfoComponent } from './show_info.component';

// import {Observable} from 'rxjs/Observable';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl:  'app.component.html',
  providers: [TrainersService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  trainers: any;
  // trainer: any;
// @ViewChild(ShowInfoComponent) info: ShowInfoComponent;
  constructor(private trainersService: TrainersService) {
      // this.trainersService.getData().subscribe( (data: any) =>{
      //   this.trainers = data.trainers;
      // });
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
}
