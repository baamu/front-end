import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';

export interface DownloadHistory {
  id:number;
  name:string;
  url:string;
  added_date:string;
  downloaded_date:string;
  file_size:number;
}

@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.css']
})
export class HistoryUserComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource : MatTableDataSource<DownloadHistory[]> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'url', 'added_date', 'downloaded_date','file_size'];

  constructor(private service : AppService) {
    
  }

  ngOnInit() {
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



}
