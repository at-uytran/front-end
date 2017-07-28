
import {Component, Input, ContentChild, ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'trainers',
  templateUrl: 'trainers.component.html'
})
export class TrainersComponent {
  @Input() trainer: number;

}