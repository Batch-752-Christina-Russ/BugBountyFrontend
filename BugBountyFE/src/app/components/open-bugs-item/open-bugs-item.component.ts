import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BugReport } from '../../models/BugReport';
import { BugReportService } from '../../services/bug-report.service';
import { EventEmitter } from 'protractor';
import { type } from 'os';

@Component({
  selector: 'app-open-bugs-item',
  templateUrl: './open-bugs-item.component.html',
  styleUrls: ['./open-bugs-item.component.css']
})

export class OpenBugsItemComponent implements OnInit {

  @Input() bugReport:BugReport;
  @ViewChild('card') card:ElementRef;
  constructor(private brs:BugReportService) { }

  ngOnInit(): void {
  }

  approve():void{
    this.bugReport.status = 'open';
    this.brs.resolve(this.bugReport).subscribe(res => {
      console.log("resolved and deleting")
      this.removeFromClient();
    },err => {
      console.log('Error');
    });
  }

  deny():void{
    this.bugReport.status = 'delete';
    this.brs.resolve(this.bugReport).subscribe(res => {
      //deletes too quickly
      this.removeFromClient();
    },err => {
      console.log('Error');
    });
  }

  removeFromClient():void{
    this.brs.deletePendingBugReport(this.bugReport.id);
  }
}
