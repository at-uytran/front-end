import { Component, ViewChild, ViewChildren, AfterContentInit } from '@angular/core';
import { ListComponent } from './list.component'
import { AlertComponent } from './alert.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// implements AfterContentInit
export class AppComponent{
data: Array<string>=[];
  addMember = (event) :void => {
    this.data.push(event);
  }

  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChild(ListComponent) list: ListComponent;
  showAlert() {
    this.alert.show();
  }

  showList(){
    this.list.show();
  }
  
  hideList(){
    this.list.hide();
  }
}
