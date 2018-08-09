import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userData: User[] = [];
  
  form: FormGroup;

  addUser(){
	  this.userData.push(this.form.value);
  }

  constructor() { }

  ngOnInit() {
  	this.form = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
		contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
		email: new FormControl('', [Validators.required, Validators.email])
  	})
  }

}
