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


const BASE_URL = "http://3.90.223.43:8080";
//const BASE_URL = "http://10.22.166.122:8080";



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }


  register(email:string, name:string, username:string, nic:string, dob:string, password:string) {
    //data that want to perticular user
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
      //return response body (only text)
      map(response => {return response.body})
    );

  }

  login(email:string, password:string) {
    //payload
    var user = {
      "email" : email,
      "password" : password
    }
    
    return this.http.post(BASE_URL+'/login', user, {headers:request_headers, observe:"response"})
    .pipe(
      map(respose => {
         if(respose.ok) {
           request_headers = request_headers.append("Authorization", respose.headers.get("Authorization"))

           //store token in session storage for later use
           this.storage.set("token", respose.headers.get("Authorization"))
           this.storage.set("username", email);

          //  console.log(this.storage.get('token'))
         } 
         return respose.body
      })
    );

  }

  addDownload(url:string) {

    console.log(url)
    //cannot send a request if not logged in
    //check token to findout if the user is logged
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }
    this.getOnGoingDownloads

    var payload = {
      "url" : url
    }

    //call api addDownload function and return response
    return this.http.post(BASE_URL+'/api/public/download/add', payload, {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body})
    )

  }



  removeDownload(id:number){
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    return this.http.get(BASE_URL+'/api/public/download/remove?id='+id,  {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body})
    )

  }



//cards get_trending
  getOnGoingDownloads() : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }
    
    return this.http.get<Array<any>>(BASE_URL+'/api/public/download/get-all',{headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
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

  copyFromRepo(id){
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    return this.http.get(BASE_URL+"/api/public/repository/get?id="+id, {headers:request_headers.append("Authorization",this.storage.get("token")), reportProgress: true, responseType: 'blob'});
  }



  getFilesFromRepo(repoName:string, page:number) : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    let url = BASE_URL+"/api/public/repository/"+repoName+"?page="+page;

    return this.http.get<Array<any>>(url, {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
              .pipe(
                map(response => {return response.body;})
              );
  }

  setRepoName(repo: string) : void {
    this.storage.set("repo", repo);
  }

  getRepoName(): string {
    return this.storage.get("repo");
  }

  //logout
  logout():void {
    this.http.get(BASE_URL+'/logout',  {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"});
    
    this.storage.remove("token");
  }

  isLogged():boolean {
    if(!this.storage.get("token")) {
      return false;
    } else {
      return true;
    } 
  }


  
}
