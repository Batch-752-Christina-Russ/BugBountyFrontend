import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clicked:string;
  constructor(
    private router:Router, 
    private navbarService: NavbarService
    ) { }
    
  cRole:String;

  ngOnInit(): void {
    this.navbarService.currentcRole.subscribe(cRole => this.cRole = cRole);
  }

  setClicked(navItem:string){
    this.clicked = navItem;
  }

  logout():void{
    this.clicked = '';
    sessionStorage.clear();
    this.navbarService.changeRole(sessionStorage.getItem('Role'));
    this.router.navigate(['index']);
  }

}
