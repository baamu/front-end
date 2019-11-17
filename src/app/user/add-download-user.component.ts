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

  form: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.form = this.fb.group({
      url : ['']
    })
  }

  formSubmit() {
    
    var url:string = this.form.get('url').value;

    try {
      this.appService.addDownload(url)
      .subscribe(response => {
          console.log(response)
          alert("Success!")
        },

        error => {
          console.log("error ", error)
        }
      );
    }catch (e) {
      console.log(e)
      alert("Failed!")
    }

    this.form.reset();
    
  }

}
