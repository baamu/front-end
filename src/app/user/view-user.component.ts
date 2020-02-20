import {Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';

export class Download {
  id: string;
  fileName: string;
  downloadedSize: number;
  fileSize:number;
  completed:string;
}

@Component({
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit{

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // trendings: Download[];
  ngOnInit(): void {

    this.loadData()

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 
  }

  loadData() {
    this.service.getOnGoingDownloads().pipe(
      map(Response =>{
        let data: Download []= new Array();
        Response.forEach(element => {
          console.log("Element : ", element)
          let d: Download = new Download ();
          d.id= element.id;
          d.fileName = element.fileName;
          d.fileSize = element.fileSize;
          d.completed = element.completed;
          // if(element.completed) {
            // d.completed = "In progress";
          // }else {
            // d.completed = "Waiting to be downloaded";
          // }

          data.push(d)          
        }); 
        return data;
      })
    ).subscribe(response => {
      this.dataSource.data=response;
    });
  }

  removeDownload(id) {
    console.log(id);
    this.service.removeDownload(id).subscribe(((response:JSON) => {
      alert(response);
      this.loadData();
    }));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['fileName', 'fileSize', 'downloadedSize', 'completed', 'image'];
  //dataSource=download type data 
  dataSource : MatTableDataSource<Download> = new MatTableDataSource();

  constructor(private service : AppService) {
    
  }



}




