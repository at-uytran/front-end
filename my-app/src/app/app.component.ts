import { Component, Inject, OnChanges, OnInit } from '@angular/core';
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
  currentTeam = '';
  teamSkills = {
    "Ruby": ["Ruby"],
    "PHP": ["PHP"],
    "FE": ["HTML","CSS", "JS"]
};

  memberForm: FormGroup;
  personal: FormGroup;
  company: FormGroup;
  name = new FormControl('', [
    Validators.minLength(3),
  ]);
  skills = new FormControl('', [Validators.required, this.checkSkills.bind(this)]);

  team: any;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder) {
    this.teams = ['Ruby', 'FE', 'PHP'];

     this.memberForm = formBuilder.group({
          personal: formBuilder.group({
            name: this.name,
            birthday: new FormControl(''),
          }),
          company: formBuilder.group({
            team: new FormControl(''),
            skills: this.skills,
          })
       });
     this.team = this.memberForm.controls.company.get('team');
     console.log(this.team);
     }

  checkSkills(form: FormControl) {

    const skills = form.value;
    console.log(skills);


    if (typeof this.memberForm != 'undefined'){
     //  console.log(1);
     // console.log('Team:'+this.team);
     // console.log(this.teamSkills[this.memberForm.controls.company.get('team').value]);
      return (this.teamSkills[this.team.value].includes(skills)== true) ? null : {'invalid skills' : true};
    }
    else return "there are no skills";

    }
  ngOnChanges(changeRecord) {
    console.log(4);
  }
  ngOnInit() {
       console.log(this.memberForm.controls.company.get('team').value);
       this.memberForm.controls.company.get('team').valueChanges.subscribe((form) => {
         this.memberForm.controls.company.get('skills').setValue('');
     });
  }

  ngDoCheck(){

  }

  addMember(memberForm: FormGroup) {
    console.log(this.memberForm.controls.personal.get('name').value);
    var list = document.getElementById("list");
    var member = document.createElement('li');
    var c = document.createElement('span');
    c.innerHTML = "Name: "+ this.memberForm.controls.personal.get('name').value + ", birthday: " +this.memberForm.controls.personal.get('birthday').value;
    member.appendChild(c);
    list.appendChild(member);
    }
}
