import { Component, OnChanges } from '@angular/core';
import { MemberFormComponent } from './member_form.component';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  teams: any[];
  birthday: string = '';
  constructor() {
    this.teams = ['Ruby', 'FE', 'PHP'];
  }
onChange(){

}

  addMember(form: NgForm) {
  var a = document.getElementById("list");
  var b = document.createElement('li');
  var c = document.createElement('span');
  c.innerHTML = "name: "+ form.value.name + ", birthday:" +form.value.birthday;
  b.appendChild(c);
  a.appendChild(b);
  }
}
