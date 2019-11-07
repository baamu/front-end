import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
