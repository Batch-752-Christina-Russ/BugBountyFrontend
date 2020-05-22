import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BugreportService {
  private URL:String = 'http://localhost:8080/bugreport'
  HttpOptions = { headers: new HttpHeaders({'Content-Type':'application/json'})};

  constructor(private client:HttpClient) { }

  resolve(bugId:number, username:String): void{
    this.client.post<any>(`${this.URL}/resolve`, `{"id": ${bugId}, "username": "${username}"}` ,this.HttpOptions).subscribe();
  }
}
