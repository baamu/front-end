import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    
  }

  data = {};
  formSubmit(){
  
    var user = {
      email : this.form.get('email').value,
      password : this.form.get('password').value
    }

    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      observe: 'response'
    };

    console.log(user)

    this.http.post('http://localhost:8080/login', JSON.stringify(user), httpOptions).subscribe(
      (response: HttpResponse<any>) => console.log(response.headers.get('Authorization')),
      (error) => console.log(error)
    )

  }

  ngOnInit() {

    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

}
