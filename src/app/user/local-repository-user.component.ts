import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-repository-user',
  templateUrl: './local-repository-user.component.html',
  styleUrls: ['./local-repository-user.component.css']
})
export class LocalRepositoryUserComponent implements OnInit {

  constructor(private service : AppService, private router: Router) {
    
  }

  ngOnInit() {

  }

  setRepo(repoName:string) {
    this.service.setRepoName(repoName);
    console.log(repoName);
    this.router.navigate(["/generatereport"]);
  }

}
