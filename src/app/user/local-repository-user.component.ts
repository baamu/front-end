import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-local-repository-user',
  templateUrl: './local-repository-user.component.html',
  styleUrls: ['./local-repository-user.component.css']
})
export class LocalRepositoryUserComponent implements OnInit {

  constructor(private service : AppService) {
    
  }

  ngOnInit() {

  }

  setRepo(repoName) {
    this.service.setRepoName(repoName);
  }

}
