import { Component, OnInit } from '@angular/core';
import{User}from '../models/user.model';

@Component({
  selector:'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  user: User[] = [
    {
      name: 'Night Wolf',
      //photopath:'assets/images/night_wolf.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
