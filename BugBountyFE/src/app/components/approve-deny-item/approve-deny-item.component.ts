import { Component, OnInit, Input } from '@angular/core';
import { BugReport } from 'src/app/models/BugReport';
import { BugReportService } from 'src/app/services/bug-report.service';

@Component({
  selector: 'app-approve-deny-item',
  templateUrl: './approve-deny-item.component.html',
  styleUrls: ['./approve-deny-item.component.css']
})
export class ApproveDenyItemComponent implements OnInit {

  @Input() bugReport:BugReport;
  constructor(private brs:BugReportService) { }

  ngOnInit(): void {
  }

  approve():void{
    this.bugReport.status = 'open';
    this.brs.approve(this.bugReport).subscribe(res => {

    },err => {
      console.log('Ya dun goofd');
    });
  }

  deny():void{
    this.bugReport.status = 'delete';
    this.brs.deny(this.bugReport).subscribe(res => {

    },err => {
      console.log('Ya dun goofd');
    });
  }

}
