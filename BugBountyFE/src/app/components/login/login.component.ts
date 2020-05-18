import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

import { Role } from '../../models/Role';
import { User } from '../../models/User';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users_id : number;
  public username : string;
  public password : string;
  public points : number;
  public role : Role;
  public user : User; 
  
  public msj :boolean = false;

  constructor(private http: HttpClient) { }

  public login(): void{
    this.LoginService.login(this.username, this.password)
      .subscribe(
        result => {
          if(result == null){
            this.msj = true;
          }else{            
            //this.getStudent(result); 
          }
        },
        error => {
          console.log(error);
          this.msj = true;
        }
      );
  }
 

  ngOnInit(): void {
  }

}
