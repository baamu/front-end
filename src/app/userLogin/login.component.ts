import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { map, catchError } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    
  }

  
  formSubmit(){
  
    var user = {
      email : this.form.get('email').value,
      password : this.form.get('password').value
    }

    const hdr = new HttpHeaders().set('Content-Type', 'application/json')
      
    console.log(user)

    this.http.post<HttpResponse<any>>('http://localhost:8080/login', user, {headers: hdr, observe : "response"})
    .pipe(
      map(response => {
        console.log(response.headers.get("authorization"))
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
      password: ['']
    })
  }

}
