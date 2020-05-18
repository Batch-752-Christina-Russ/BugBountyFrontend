import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/User';
import { Role } from '../models/Role';
 
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string): Observable<User>{

    let user = new User(0, username, password, 0, Role);

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body = JSON.stringify({
      id: user.getId(),
      username: user.getUsername(),
      password: user.getPassword(),
      points: user.getPoints(),
      role: user.getRole()
    })

    return this.http.post<User>('http://localhost:8080/user/login', body, {headers: headers});
  }
}
