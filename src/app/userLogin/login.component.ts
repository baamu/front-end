import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private appService: AppService, private _router: Router) {
    
  }
  
  formSubmit(){
  
    var email:string = this.form.get('email').value;
    var password:string = this.form.get('password').value;

    this.appService.setRepoName("other");

    this.appService.login(email, password)
      .subscribe(response => {
          console.log(response)
          this._router.navigate(["/add"]);
        },
        error => {
          console.log("error ", error);
          alert("Login Failed!")
          this.form.reset();
        }
      );

  }

  ngOnInit() {

    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

}
