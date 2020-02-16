import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // minDate: Date;
  maxDate: Date;
  hide = true;
 
  form: FormGroup;

  constructor(public fb: FormBuilder, private appService: AppService) { 
      // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
      const currentYear = new Date().getFullYear();
      // this.minDate = new Date(currentYear - 50, 0, 1);
      this.maxDate = new Date(currentYear -12, 11, 31);

  }

  formSubmit(){
  
    var email:string =this.form.get('email').value;
    var username:string = this.form.get('username').value;
    var name:string = this.form.get('name').value;
    var dob:string = this.form.get('dob').value.replace(/-/g,"/");
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
      email: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      password: [''],
      repass:['']
    })
  }

}
