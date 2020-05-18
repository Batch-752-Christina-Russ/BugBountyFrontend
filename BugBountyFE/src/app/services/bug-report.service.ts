import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BugReport } from '../models/BugReport';

@Injectable({
  providedIn: 'root'
})
export class BugReportService {

  constructor(private http:HttpClient) { }

  //Submit Bug Report
  submitBugReport(bugreport:BugReport) {
    //make http header
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    //console.log(JSON.stringify(bugreport));
    this.http.post('http://localhost:8080/bugreport/new', JSON.stringify(bugreport), {headers:header}).subscribe(
      () => { console.log("successful submit");},
      () => { console.log("failed submission");}
    );//end observable
  }

  
}

