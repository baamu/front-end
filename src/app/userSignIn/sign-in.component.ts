import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) { }

  formSubmit(){
  
    var user = {
      email : this.form.get('email').value,
      username : this.form.get('username').value,
      name : this.form.get('name').value,
      dob : this.form.get('dob').value,
      nic : this.form.get('nic').value,
      password : this.form.get('password').value
    }

    const hdr = new HttpHeaders().set('Content-Type', 'application/json')
      
    console.log(user)

    this.http.post<HttpResponse<any>>('http://localhost:8080/api/public/user/register', user, {headers: hdr, observe : "response"})
    .pipe(
      map(response => {
        // console.log(response.headers.get("authorization"))
        return response.body
      })
    )
    .subscribe(response => {
      console.log(response)
    },

    error => {
      console.log("error ", error)
    }
    
    )

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
