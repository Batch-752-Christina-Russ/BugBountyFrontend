import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { Role } from '../../models/Role';
import { User } from '../../models/User';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string;
  public password : string;
  public user : User; 
  public error:string = null;

  public message :boolean = false;

  constructor(private http: HttpClient, private loginService: LoginService, private router:Router) { }

  public login(): void{
    this.loginService.login(this.username, this.password)
      .subscribe(
        result => {
          console.log(result);
          if(result == null){
            this.message = true;
          }else{      
            console.log(result);
            //sessionStorage.setItem("id", result.id.toString());
            sessionStorage.setItem("Username", result.username);
            sessionStorage.setItem("Role", result.role.name); 
            
            this.router.navigate(['home']);
          }
        },
        error => {
          console.log(error);
          this.message = true;
        }
      );
  }
 

  ngOnInit(): void {
  }

}
