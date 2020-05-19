import { Component, OnInit } from '@angular/core';
import { BugReport } from 'src/app/models/BugReport';
import { BugReportService } from 'src/app/services/bug-report.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-approve-deny-bug',
  templateUrl: './approve-deny-bug.component.html',
  styleUrls: ['./approve-deny-bug.component.css']
})
export class ApproveDenyBugComponent implements OnInit {

  bugReports:BugReport[];
  role:Role = new Role(1, 'user');
  rep:User = new User(1, 'Derp', null, 2, this.role);
  constructor(private brs:BugReportService) { }

  ngOnInit(): void {
    // this.brs.getPendingBugReports().subscribe(bugReports => {
    //   this.bugReports = bugReports;
    // })
    
    this.bugReports = [
      {
        id: 1,
        reporter: this.rep,
        resolver: null,
        application: 'Donkeys',
        location: 'DonkeyService',
        description: 'Missing donkeys',
        steps: 'Open app',
        severity: 'Critical',
        date: null,
        status: 'pending'
      },
      {
        id: 2,
        reporter: this.rep,
        resolver: null,
        application: 'Donkeys2',
        location: 'DonkeyService2',
        description: 'Missing donkeys2',
        steps: 'Open app2',
        severity: 'Critical2',
        date: null,
        status: 'pending'
      },
      {
        id: 3,
        reporter: this.rep,
        resolver: null,
        application: 'Donkeys3',
        location: 'DonkeyService3',
        description: 'Missing donkeys3',
        steps: 'Open app3',
        severity: 'Critical3',
        date: null,
        status: 'pending'
      }
    ]
  }

}
