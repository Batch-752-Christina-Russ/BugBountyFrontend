import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BugReport } from '../models/BugReport';

@Injectable({
    providedIn: 'root'
  })

export class OpenBugsService{

  constructor(private http: HttpClient) { }

  viewOpenBugs(): Observable<BugReport[]>{
    return this.http.get(
      "/bugreport/status/open"
    ) as Observable<BugReport[]>
  }


}
