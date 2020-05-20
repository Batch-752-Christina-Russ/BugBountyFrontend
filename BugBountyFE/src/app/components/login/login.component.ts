import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { Role } from '../../models/Role';
import { User } from '../../models/User';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from 'src/app/services/navbar.service';



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
  public cRole:string;

  public message :boolean = false;

  constructor(private http: HttpClient, 
              private loginService: LoginService, 
              private router:Router,
              private navbarService: NavbarService
              ) { }

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
            //Update the navbar cRole variable
            this.navbarService.changeRole(sessionStorage.getItem('Role'));
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
    this.navbarService.currentcRole.subscribe(cRole => this.cRole = cRole);
  }

}
