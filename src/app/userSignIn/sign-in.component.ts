import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private appService: AppService) { }

  formSubmit(){
  
    var email:string =this.form.get('email').value;
    var username:string = this.form.get('username').value;
    var name:string = this.form.get('name').value;
    var dob:string = this.form.get('dob').value;
    var nic:string = this.form.get('nic').value;
    var password:string = this.form.get('password').value;

    var repass:string = this.form.get('repass').value;

    this.appService.register(email,name,username,nic,dob,password)
      .subscribe(response => {
          console.log(response)
          alert("Verification Email Sent! Verify account and login!")
        },

        error => {
          console.log("error ", error)
          alert("Registration Failed!")
          
        }
      );

      this.form.reset();

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      username: [''],
      name: [''],
      dob: [''],
      nic: [''],
      password: [''],
      repass:['']
    })
  }

}
