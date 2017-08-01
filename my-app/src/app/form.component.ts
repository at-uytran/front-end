import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form.component.html',
})
export class FormComponent {
      name: string;

	@Output() results: EventEmitter<string> = new EventEmitter<string>();

	addMember= () :void =>{
		this.results.emit(this.name);
		this.name = '';
	}
}
