import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-template-drivan',
  templateUrl: './template-drivan.component.html',
  styleUrls: ['./template-drivan.component.css']
})
export class TemplateDrivanComponent implements OnInit {
  userData: User[] = [];
  constructor() { }

  addUser(form){
  	console.log(form.value)
	  var user: User;
	  user = form.value;
	  this.userData.push(user);
  }

  ngOnInit() {
  }

}
