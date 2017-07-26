import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form.component.html',
})
export class FormComponent {
 name: string;
	@Output() member: EventEmitter<string> = new EventEmitter<string>();
      // this addMember is sending eventEmit out of form.
	addMember= () :void =>{
		this.member.emit(this.name);
	}
}
