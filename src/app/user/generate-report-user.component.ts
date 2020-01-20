import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';
import { map } from 'rxjs/operators';

export class RepoFile {
  id:string;
  name;
  file_size:number;
  image;
}

@Component({
  selector: 'app-generate-report-user',
  templateUrl: './generate-report-user.component.html',
  styleUrls: ['./generate-report-user.component.css']
})
export class GenerateReportUserComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedCols :string[] = ["id", "name", "size", "download"]
  dataSource : MatTableDataSource<RepoFile> = new MatTableDataSource();

  constructor(private service : AppService) {
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {

    this.service.setRepoName("other");
    let repo = this.service.getRepoName();

    this.service.getFilesFromRepo(repo,1).pipe(
      map(response => {
        let data: RepoFile[] = new Array();
        response.forEach(element => {
          console.log("Element : ", element)
          let d: RepoFile = new RepoFile();
          d.id = element.id;
          d.name = element.name;
          d.file_size = element.file_size;
          d.image = "/assets/images/download.png";
          data.push(d);
        });
        return data;
      })
      ).subscribe(response => {
      // console.log(response);
      this.dataSource.data = response;
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  copyFile(id) {
    console.log(id);
    this.service.copyFromRepo(id);
  }

}
