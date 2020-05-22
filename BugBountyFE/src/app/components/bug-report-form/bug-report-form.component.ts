import { Component, OnInit } from '@angular/core';
import { BugReportService } from 'src/app/services/bug-report.service';
import { BugReport } from 'src/app/models/BugReport';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Severity } from 'src/app/models/Severity';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bug-report-form',
  templateUrl: './bug-report-form.component.html',
  styleUrls: ['./bug-report-form.component.css']
})
export class BugReportFormComponent implements OnInit {



  bugReport:BugReport; 
  severityOptions:Severity = new Severity();
  severityDisplay: {};  
  reporter:string;
  message:boolean;
  errorMessage:boolean;

  bugFormFG = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    steps: new FormControl('', Validators.required),
    severity: new FormControl('', Validators.required),
  });

  constructor(
      private bugReportService : BugReportService,
      private router:Router
      ) { }

  ngOnInit(): void {
    let checker = sessionStorage.getItem('Role');
    if(!checker){
      this.router.navigate(['']);
    }
    this.reporter = sessionStorage.getItem("Username"); 
    this.severityDisplay = this.severityOptions.getSeverity(); 
  }

  //submit bug report method
  submitBugReport(){
    let user1:User = new User(undefined, this.reporter, "", 0, new Role(undefined, ""));
    let user2:User = null;
    this.bugReport = new BugReport(0, user1, user2, 
                                  this.bugFormFG.get('name').value, 
                                  this.bugFormFG.get('location').value,
                                  this.bugFormFG.get('description').value,
                                  this.bugFormFG.get('steps').value,
                                  this.bugFormFG.get('severity').value,
                                  new Date(),
                                  "pending");
    this.bugReportService.submitBugReport(this.bugReport).subscribe(result => {
        this.message = true;
        setTimeout(() =>
        {
          this.router.navigate(['home']);
        },
        3000);
    },
    error => {
      this.errorMessage = true;
    });

    
  }
}
