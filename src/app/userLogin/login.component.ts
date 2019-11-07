import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {};
  formSubmit(){
    console.log(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
