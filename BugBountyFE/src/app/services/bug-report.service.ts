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
  
  getPendingBugReports():Observable<BugReport[]>{
    return this.http.get<BugReport[]>(`${this.brUrl}/pending`);
  }

  resolve(bugReport:BugReport):Observable<any>{
    return this.http.post<any>(`${this.brUrl}/approvedeny`, bugReport, this.httpOptions);
  }

}
