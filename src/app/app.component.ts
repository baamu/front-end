import { Component, Inject, Injectable } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'Night Wolf';
  show: boolean= this.storage.get("token");

  constructor(@Inject(SESSION_STORAGE)  private storage: WebStorageService, private _router:Router, private service:AppService) {
    this.show = this.storage.get("token");
  }

  setLogged() {
    this.show = this.storage.get("token");
  }

  logout() {
    this.service.logout();
    this.setLogged();
    this._router.navigate(["login"])
  }

}



