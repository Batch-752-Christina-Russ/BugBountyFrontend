import { Component, OnInit } from '@angular/core';
import { BugreportService } from 'src/app/services/bugreport.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {

  constructor(
    private bugreportService : BugreportService,
    private router: Router
    ) { }

  ngOnInit(): void {
    let checker = sessionStorage.getItem('Role');
    if(!checker){
      this.router.navigate(['']);
    }
  }

  resolveBug(bugId: number, username: String):void{
      this.bugreportService.resolve(bugId, username);
    }

}
