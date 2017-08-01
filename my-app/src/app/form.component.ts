
import {Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: 'form.component.html'
})
export class FormComponent {
   name: string;
  
  @Output()
  add: EventEmitter<string> = new EventEmitter<string>();

  addMember= () :void =>{
    this.add.emit(this.name);
    this.name = '';
  }
  constructor() {
    this.name = 'World';
  }
}