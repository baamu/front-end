import {Component, OnInit} from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material';

export interface Download {
  id: string;
  userId: number;
  url: number;
  downloadedSize: string;
  fileSize:string;
  completed:string;
}

@Component({
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{
  ngOnInit(): void {

    this.service.getOnGoingDownloads().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    })
 
  }

  displayedColumns: string[] = ['url', 'downloadedSize', 'fileSize', 'completed'];
  dataSource : MatTableDataSource<Download[]>;

  constructor(private service : AppService) {
    
  }



}




