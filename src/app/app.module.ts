import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';



import { SearchUserComponent } from './user/search-user.component';
import { CreateUserComponent } from './user/create-user.component';
import { ViewUserComponent } from './user/view-user.component';
import { AddDownloadUserComponent } from './user/add-download-user.component';
import { GenerateReportUserComponent } from './user/generate-report-user.component';
import { LocalRepositoryUserComponent } from './user/local-repository-user.component';
import { HistoryUserComponent } from './user/history-user.component';
import { LoginComponent } from './userLogin/login.component';
import { SignInComponent } from './userSignIn/sign-in.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
 


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({ 
  declarations: [
    AppComponent,
    SearchUserComponent,
    CreateUserComponent,
    ViewUserComponent,
    AddDownloadUserComponent,
    GenerateReportUserComponent,
    LocalRepositoryUserComponent,
    HistoryUserComponent,
    routingComponents,
    
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
=======
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> 75eedf60401cf1c305524541b9c1ba5c3113d2ad
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
