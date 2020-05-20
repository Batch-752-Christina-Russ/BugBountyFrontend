import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BugReport } from 'src/app/models/BugReport';
import { BugReportService } from 'src/app/services/bug-report.service';
import { EventEmitter } from 'protractor';
import { type } from 'os';

@Component({
  selector: 'app-approve-deny-item',
  templateUrl: './approve-deny-item.component.html',
  styleUrls: ['./approve-deny-item.component.css']
})
export class ApproveDenyItemComponent implements OnInit {

  @Input() bugReport:BugReport;
  @ViewChild('card') card:ElementRef;
  constructor(private brs:BugReportService) { }

  ngOnInit(): void {
  }

  approve():void{
    this.bugReport.status = 'open';
    this.brs.resolve(this.bugReport).subscribe(res => {
      this.card.nativeElement.style.display='none';
    },err => {
      console.log('Error');
    });
  }

  deny():void{
    this.bugReport.status = 'delete';
    this.brs.resolve(this.bugReport).subscribe(res => {
    },err => {
      console.log('Error');
    });
  }

}
