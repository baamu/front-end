import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Observable } from 'rxjs';

let request_headers = new HttpHeaders(
  {
  'Content-Type' : 'application/json'
  }
);

const BASE_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  register(email:string, name:string, username:string, nic:string, dob:string, password:string) {
    var user = {
      "email" : email,
      "name" : name,
      "username" : username,
      "nic" : nic,
      "dob" : dob,
      "password" : password
    }

    return this.http.post(BASE_URL+'/api/public/user/register', user, {headers: request_headers, observe : "response"})
    .pipe(
      map(response => {return response.body})
    );

  }

  login(email:string, password:string) {
    
    var user = {
      "email" : email,
      "password" : password
    }
    
    return this.http.post(BASE_URL+'/login', user, {headers:request_headers, observe:"response"})
    .pipe(
      map(respose => {
         if(respose.ok) {
           request_headers = request_headers.append("Authorization", respose.headers.get("Authorization"))

           this.storage.set("token", respose.headers.get("Authorization"))

           console.log(this.storage.get('token'))
         } 
         return respose.body
      })
    );

  }

  addDownload(url:string) {

    console.log(url)
    //cannot send a request if not logged in
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    var payload = {
      "url" : url
    }

    return this.http.post(BASE_URL+'/api/public/download/add', payload, {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body})
    )

  }

  getOnGoingDownloads() : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }
    
    return this.http.get<Array<any>>(BASE_URL+'/api/public/download/getall',{headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body;})
    );

  }

  getDownloadHistory() : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    return this.http.get<Array<any>>(BASE_URL+'/api/public/download/history',{headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body;})
    );
  }




}
