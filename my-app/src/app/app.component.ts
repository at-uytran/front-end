import { Component, OnChanges, OnInit } from '@angular/core';
import { MemberFormComponent } from './member_form.component';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  teams: any[];
  birthday: string = '';
  selectedTeam ='';
  displaySkills = '';
  name = new FormControl('', [
    Validators.minLength(5),
  ]);
  
  constructor(private formBuilder: FormBuilder) {
    this.teams = ['Ruby', 'FE', 'PHP'];

  }

memberForm: FormGroup;

ngOnInit() {
      console.log(1);
          this.memberForm = this.formBuilder.group({
        name : '',
        birthday: '',
        team: '',
        skills: ''
      })
}

ngDoCheck(){
   this.memberForm.valueChanges.subscribe((form) => {
     this.displaySkills = `${form.team}`;
   });
   console.log(this.displaySkills);
}
  addMember(memberForm: FormBuilder) {
      console.log(2);

    console.log(this.memberForm.value);

  var list = document.getElementById("list");
  var member = document.createElement('li');
  var c = document.createElement('span');
  c.innerHTML = "name: "+ this.memberForm.get('name').value + ", birthday:" +this.memberForm.value.birthday;
  member.appendChild(c);
  list.appendChild(member);
  }
}
