import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BugReport } from '../models/BugReport';

@Injectable({
    providedIn: 'root'
  })

export class OpenBugsService{

  constructor(private http: HttpClient) { }

    // BugReport : Object;

//   viewBugsUser(id: number): Observable<BugReport[]>{
    
//     return this.http.get(
//       "http://localhost:8080/bugreport/" + id
//     ) as Observable<BugReport[]>
//   }

  viewBugsAdmin(): Observable<BugReport[]>{
    return this.http.get(
      "/bugreport/status/pending"
    ) as Observable<BugReport[]>
  }


}
