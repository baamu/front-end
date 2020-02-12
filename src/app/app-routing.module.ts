import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDownloadUserComponent } from './user/add-download-user.component';
import {LocalRepositoryUserComponent} from './user/local-repository-user.component';
import { HistoryUserComponent } from './user/history-user.component';
import { GenerateReportUserComponent } from './user/generate-report-user.component';
import {ViewUserComponent } from './user/view-user.component';
import {LoginComponent} from './userLogin/login.component';
import {SignInComponent} from './userSignIn/sign-in.component';
import { SearchUserComponent } from './user/search-user.component';


const routes: Routes = [
  {path: 'searchuser', component: SearchUserComponent},
  {path: 'view', component: ViewUserComponent},
  {path: 'add', component: AddDownloadUserComponent},
  {path: 'history', component: HistoryUserComponent},
  {path: 'GenerateReport', component: GenerateReportUserComponent},
  {path: 'localrepository', component: LocalRepositoryUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignInComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { 
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Method not implemented.");
  }
  
}

export const routingComponents = [LoginComponent, SignInComponent]

function newFunction(): string {
  return 'Searchlinks';
}


