import { Component, ViewChild } from '@angular/core';
import { TrainersService } from './trainers.service';

@Component({
  selector: 'app-root',
  templateUrl:  'app.component.html',
  providers: [TrainersService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trainers: any[];
  constructor(public trainersService: TrainersService) {
  }
  getTrainers(): void {
    this.trainers = this.trainersService.getTrainers();
  }
 
  ngOnInit(): void {
    this.getTrainers();
  }
 
// trainers: any[] = [
//     { name: 'Kien', birthday: '1992', team: 'Ruby', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ARvRFLoWGkEmneyiZ6Yj-XDtwRG4ko2wxV5bzaaM1krpT40fng' },
//     { name: 'Vi', birthday: '1989', team: 'FE', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA95wKwihQ4G1QxiFWWnvKSp5__Yr6a1ZjLxk-9kIiKzq6df_h' },
//     { name: 'Dong', birthday: '1993', team: 'FE', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA95wKwihQ4G1QxiFWWnvKSp5__Yr6a1ZjLxk-9kIiKzq6df_h' }
//   ];
}
