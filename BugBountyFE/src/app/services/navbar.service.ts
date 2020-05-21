import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private cRole = new BehaviorSubject<string>(sessionStorage.getItem('Role'));
  currentcRole = this.cRole.asObservable();

  constructor() { 
  }

  //updates the role to passed in string
  changeRole(role: string){    
    this.cRole.next(role);
  }
}
