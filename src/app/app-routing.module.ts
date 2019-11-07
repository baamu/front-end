import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDownloadUserComponent } from './user/add-download-user.component';
import { LocalRepositoryUserComponent } from './user/local-repository-user.component';
import { HistoryUserComponent } from './user/history-user.component';
import { GenerateReportUserComponent } from './user/generate-report-user.component';
import {ViewUserComponent } from './user/view-user.component';
import {LoginComponent} from './userLogin/login.component';
import {SignInComponent} from './userSignIn/sign-in.component';
import { SearchUserComponent } from './user/search-user.component';


const routes: Routes = [
  {path: 'SearchUser', component: SearchUserComponent},
  {path: 'View', component: ViewUserComponent},
  {path: 'AddDownload', component: AddDownloadUserComponent},
  {path: 'History', component: HistoryUserComponent},
  {path: 'GenerateReport', component: GenerateReportUserComponent},
  {path: 'LocalRerpository', component: LocalRepositoryUserComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: '', redirectTo: 'Searchlinks', pathMatch: 'full'},
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


