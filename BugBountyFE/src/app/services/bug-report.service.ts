import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BugReport } from '../models/BugReport';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BugReportService {

  public pendingBugReports = new BehaviorSubject({});

  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private brUrl:string = 'http://localhost:8080/bugreport'
  
  getPendingBugReports():Observable<BugReport[]>{
    return this.http.get<BugReport[]>(`${this.brUrl}/pending`);
  }

  resolve(bugReport:BugReport):Observable<any>{
    return this.http.post<any>(`${this.brUrl}/approvedeny`, bugReport, this.httpOptions);
  }

  addPendingBugReports(bugReport:BugReport){
    this.pendingBugReports.next({...this.pendingBugReports.value, [bugReport.id]:bugReport});
  }
  deletePendingBugReport(id:number){
    let pendingBugReports = this.pendingBugReports.value;
    delete pendingBugReports[id];
    this.pendingBugReports.next(pendingBugReports);
  }


  //Submit Bug Report
  submitBugReport(bugreport:BugReport) {
    //make http header
    //let header = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(JSON.stringify(bugreport));
    return this.http.post('http://localhost:8080/bugreport/save', JSON.stringify(bugreport), {headers: new HttpHeaders({'Content-Type':  'application/json',})});
    
  }

  
}


