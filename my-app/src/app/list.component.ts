import { Component,OnInit, Input } from '@angular/core';
@Component({
  selector: 'list-members',
  templateUrl: './list.component.html',
})
export class ListComponent {
@Input() data: string[];

  hidden: boolean = false;

   deleteMember  = (name: string) :void => {
   	this.data.splice(this.data.indexOf(name), 1);
   }
   ngOnInit(){
     console.log(this.data);
   }
     show() {
    this.hidden = false;
  }

  hide(){
    this.hidden = true;
  }

}
