import { Injectable } from '@angular/core';

import { Role } from '../models/Role';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl:String = 'http://localhost:8080/user';
  private rank : Number;

  constructor(private client : HttpClient) { }

  getRank(username: String) : Observable<any>{
    return this.client.get<any>(`${this.userUrl}/userrank/${username}`);
  
  }
  
  getLeaderboard() : Observable<User[]> {    
    return this.client.get('http://localhost:8080/user/topten') as Observable<User[]>;
  }
}
