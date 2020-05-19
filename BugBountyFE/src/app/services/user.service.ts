import { Injectable } from '@angular/core';

import { Role } from '../models/Role';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private client : HttpClient
  ) { }

  private rank : Number;
  
  getLeaderboard() : Observable<User[]> {
    
    
    return this.client.get('http://localhost:8080/user/topten') as Observable<User[]>;
  }
}
