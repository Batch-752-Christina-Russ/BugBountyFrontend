import { Component, OnInit } from '@angular/core';
import { BugreportService } from 'src/app/services/bugreport.service'

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {

  constructor(private bugreportService : BugreportService) { }

  ngOnInit(): void {
  }

  resolveBug(bugId: number, username: String):void{
      this.bugreportService.resolve(bugId, username);
    }

}
