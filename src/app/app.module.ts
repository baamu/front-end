import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

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
import {MatNativeDateModule, MatInputModule} from '@angular/material';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


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
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
