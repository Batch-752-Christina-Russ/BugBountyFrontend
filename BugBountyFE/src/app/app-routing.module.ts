import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BugReportFormComponent } from './components/bug-report-form/bug-report-form.component';


const routes: Routes = [
  {
    component:LoginComponent,
    path: "login"
  },
  {
    component:BugReportFormComponent,
    path:"bug-report-form" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
