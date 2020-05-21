import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router, 
    private navbarService: NavbarService
    ) { }
    
  cRole:String;

  ngOnInit(): void {
    this.navbarService.currentcRole.subscribe(cRole => this.cRole = cRole);
  }

  logout():void{
    sessionStorage.clear();
    this.navbarService.changeRole(sessionStorage.getItem('Role'));
    this.router.navigate(['index']);
  }

}
