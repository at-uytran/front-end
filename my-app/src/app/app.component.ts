import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
names: Array<string>=[];
  addMember = (event) :void => {
    this.names.push(event);
  }
}
