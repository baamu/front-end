import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

let request_headers = new HttpHeaders(
  {
  'Content-Type' : 'application/json'
  }
);

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  register(email:string, name:string, username:string, nic:string, dob:string, password:string) {
    var user = {
      "email" : email,
      "name" : name,
      "username" : username,
      "nic" : nic,
      "dob" : dob,
      "password" : password
    }

    return this.http.post('http://localhost:8080/api/public/user/register', user, {headers: request_headers, observe : "response"})
    .pipe(
      map(response => {return response.body})
    );

  }

  login(email:string, password:string) {
    
    var user = {
      "email" : email,
      "password" : password
    }
    
    return this.http.post("http://localhost:8080/login", user, {headers:request_headers, observe:"response"})
    .pipe(
      map(respose => {
         if(respose.ok) {
           request_headers = request_headers.append("Authorization", respose.headers.get("Authorization"))

           console.log(request_headers.get('Authorization'))
         } 
         return respose.body
      })
    );

  }

  addDownload(url:string) {

    console.log(url)
    //cannot send a request if not logged in
    if(!request_headers.has("Authorization")) {
      console.log("no auth header is set")
      return null;
    }

    var payload = {
      "url" : url
    }

    return this.http.post("http://localhost:8080/api/public/download/add", payload, {headers:request_headers, observe:"response"})
    .pipe(
      map(response => {return response.body})
    )

  }




}
