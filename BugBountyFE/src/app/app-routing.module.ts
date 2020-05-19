import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OpenBugsComponent } from './components/open-bugs/open-bugs.component';


const routes: Routes = [
  { path: '', component:LoginComponent, pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'index', component:LoginComponent },
  {path : 'open', component:OpenBugsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
