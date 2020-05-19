import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl:String = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  getRank(username: String) : Observable<any>{
    return this.http.get<any>(`${this.userUrl}/userrank/${username}`);
  
  }
}
