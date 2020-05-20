import { Component, OnInit, Type } from '@angular/core';
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
    // this.bugReports=[new BugReport(1, null, null, 'BugBounty', null, 
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // 'High', null, 'pending'),
    // new BugReport(2, null, null, 'BugBounty', null, 
    // 'Lorem ipsum. ',
    // 'Lorem ipsum dolor.',
    // 'High', null, 'pending'),
    // new BugReport(3, null, null, 'BugBounty', null, 
    // 'Lorem ipsum. ',
    // 'Lorem ipsum dolor.',
    // 'High', null, 'pending'),
    // new BugReport(4, null, null, 'BugBounty', null, 
    // 'Woof Woof ',
    // 'Lorem ipsum dolor.',
    // 'High', null, 'pending'),
    // new BugReport(5, null, null, 'BugBounty', null, 
    // 'AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
    // 'Lorem ipsum dolor.',
    // 'High', null, 'pending'),
    // new BugReport(6, null, null, 'BugBounty', null, 
    // 'It is done ',
    // 'Lorem ipsum dolor.',
    // 'High', null, 'pending')]
    this.brs.getPendingBugReports().subscribe(bugReports => {
      this.bugReports = bugReports;
    })
  }

  deleteCard(event:any, i:any){

  }
}
