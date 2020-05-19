import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';

 
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<User>{


    let body = `username=${username}&password=${password}`;
    return this.http.post<User>(
      "http://localhost:8080/user/login", 
      body, 
      {headers: new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'})}
    )
  }
}
