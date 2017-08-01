import { Component, Input } from '@angular/core';


@Component({
  selector: 'list-members',
  templateUrl: './list.component.html',
})
export class ListComponent {
@Input() names: string[];
   deleteMember  = (name: string) :void => {
   	this.names.splice(this.names.indexOf(name), 1);
   }
}
