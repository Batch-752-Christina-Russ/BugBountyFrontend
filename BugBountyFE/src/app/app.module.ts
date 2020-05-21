import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserRankComponent } from './components/user-rank/user-rank.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ApproveDenyBugComponent } from './components/approve-deny-bug/approve-deny-bug.component';
import { ApproveDenyItemComponent } from './components/approve-deny-item/approve-deny-item.component';
import { BugReportFormComponent } from './components/bug-report-form/bug-report-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRankComponent,
    NavbarComponent,
    HomeComponent,
    LeaderboardComponent,
    ApproveDenyBugComponent,
    ApproveDenyItemComponent,
    BugReportFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
