import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data: Array<string>=[];
  addMember = (event) :void => {
    this.data.push(event);
  }
}
