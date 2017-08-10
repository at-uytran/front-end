import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'member-form',
  templateUrl: './app.component.html'
})
export class MemberFormComponent {
  name: string = '';
  team: string = '';
  birthday: string = '';

// register(form: NgForm) {
// console.log(form.value.username);
// console.log(this.username);
// // ...
// }
  addMember(form: NgForm) {
  console.log(form.value.name);
  console.log(form.value.team);
  console.log(form.value.birthday);

  }
}
