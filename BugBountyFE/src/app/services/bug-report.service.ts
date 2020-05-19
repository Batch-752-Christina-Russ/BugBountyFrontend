import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BugReport } from '../models/BugReport';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugReportService {
  
  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private brUrl:string = 'http://localhost:8080/bugreport'
  
  // getPendingBugReports():Observable<BugReport[]>{
  //   return this.http.get<BugReport[]>('url here');
  // }


  approve(bugReport:BugReport):Observable<any>{
    return this.http.post<any>(`${this.brUrl}/`, bugReport, this.httpOptions);
  }

  deny(bugReport:BugReport):Observable<any>{
    return this.http.post<any>(`${this.brUrl}/`, bugReport, this.httpOptions);
  }
}
