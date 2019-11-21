import {Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit(): void {

    this.service.getOnGoingDownloads().subscribe(response => {
      this.dataSource.data=response;
    })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['url', 'downloadedSize', 'fileSize', 'completed'];
  dataSource : MatTableDataSource<Download[]> = new MatTableDataSource();

  constructor(private service : AppService) {
    
  }



}




