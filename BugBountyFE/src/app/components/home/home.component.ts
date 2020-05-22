import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    let checker = sessionStorage.getItem('Role');
    if(!checker){
      this.router.navigate(['']);
    }
    }

  loginRedirect(){
    let username = sessionStorage.getItem("username");
    
    if (username == null){
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
  }
}