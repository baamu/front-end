import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-download-user',
  templateUrl: './add-download-user.component.html',
  styleUrls: ['./add-download-user.component.css']
})
export class AddDownloadUserComponent implements OnInit {
 //Trendings: Download[];

  form: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.form = this.fb.group({
      url : ['']
    })

    
    /*this.service.getTrendings().pipe(
      map(Response =>{
        let data: Trendings []= new Array();
        Response.forEach(element => {
          console.log("Element : ", element)
          let d: Trendings = new Trendings ();
          d.id= element.id;
          d.fileName = element.fileName;
          d.fileSize = element.fileSize;
          d.completed = element.completed;
          d.image = "/assests/images/remove.png";
          data.push(d)          
        }); 
        return data;
      })
    ).subscribe(response => {
       this.Trendings = response;
    });*/
  }

  formSubmit() {
    
    var url:string = this.form.get('url').value;

    console.log(url);

    try {
      this.appService.addDownload(url)
      .subscribe((response:JSON) => {
          console.log(response)
          let res = JSON.stringify(response).split(":")[1];
          alert(res.substring(1, res.length-2));
        },

        error => {
          console.log("error ", error);
          alert(error);
        }
      );
    }catch (e) {
      console.log(e)
      alert("Failed!")
    }

    this.form.reset();
    
  }

}
