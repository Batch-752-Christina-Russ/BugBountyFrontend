import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugReportService } from 'src/app/services/bug-report.service';
import { BugReport } from 'src/app/models/BugReport';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Severity } from 'src/app/models/Severity';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';


@Component({
  selector: 'app-bug-report-form',
  templateUrl: './bug-report-form.component.html',
  styleUrls: ['./bug-report-form.component.css']
})
export class BugReportFormComponent implements OnInit {



  bugReport:BugReport; 
  severityOptions:Severity = new Severity();
  severityDisplay: {};  

  bugFormFG = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    steps: new FormControl('', Validators.required),
    severity: new FormControl('', Validators.required),
  });

  constructor(http:HttpClient, private bugReportService : BugReportService) { }

  ngOnInit(): void {
       
    this.severityDisplay = this.severityOptions.getSeverity();
    
  }

  public isHidden = true;

  //submit bug report method
  submitBugReport(){
    let roles1:Role = new Role(1, "user");
    let roles2:Role = new Role(2, "admin");
    let user1:User = new User(0,"user1", "p1", 0, roles1);
    let user2:User = new User(1, "user2", "p2", 0, roles2);
    this.bugReport = new BugReport(0, user1, user2, 
                                  this.bugFormFG.get('name').value, 
                                  this.bugFormFG.get('location').value,
                                  this.bugFormFG.get('description').value,
                                  this.bugFormFG.get('steps').value,
                                  this.bugFormFG.get('severity').value,
                                  new Date(),
                                  "pending");
    this.bugReportService.submitBugReport(this.bugReport);
    this.isHidden = false;
  }
}
