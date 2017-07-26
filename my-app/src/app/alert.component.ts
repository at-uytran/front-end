import {Input, Component} from '@angular/core';

@Component({
  selector: 'my-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent{
  hidden: boolean = true;

  constructor() {}

  show() {
    this.hidden = false;
  }
  
  hide() {
    this.hidden = true;
  }
}