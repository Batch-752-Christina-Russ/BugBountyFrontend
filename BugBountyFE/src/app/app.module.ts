import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ApproveDenyBugComponent } from './components/approve-deny-bug/approve-deny-bug.component';
import { ApproveDenyItemComponent } from './components/approve-deny-item/approve-deny-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApproveDenyBugComponent,
    ApproveDenyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
