import { Component, OnInit, Type } from '@angular/core';
import { BugReport } from 'src/app/models/BugReport';
import { BugReportService } from 'src/app/services/bug-report.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-deny-bug',
  templateUrl: './approve-deny-bug.component.html',
  styleUrls: ['./approve-deny-bug.component.css']
})
export class ApproveDenyBugComponent implements OnInit {

  bugReports = {};
  role:Role = new Role(1, 'user');
  rep:User = new User(1, 'Derp', null, 2, this.role);
  constructor(
    private brs:BugReportService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let checker = sessionStorage.getItem('Role');
    if(!checker){
      this.router.navigate(['']);
    }
    this.brs.pendingBugReports.subscribe( bugReports => { 
      this.bugReports = bugReports
    });
    this.brs.getPendingBugReports().subscribe(bugReports => {
      bugReports.map(bugReport=>{
        this.brs.addPendingBugReports(bugReport)
      })
    })
  }
}
