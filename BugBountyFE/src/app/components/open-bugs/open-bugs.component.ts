import { Component, OnInit } from '@angular/core';
import { BugReport } from '../../models/BugReport';
import { HttpClient } from '@angular/common/http';
import { OpenBugsService } from '../../services/openbugs.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import {DatePipe } from '@angular/common';


@Component({
  selector: 'app-open-bugs',
  templateUrl: './open-bugs.component.html',
  styleUrls: ['./open-bugs.component.css']
})
export class OpenBugsComponent implements OnInit {

  constructor(private bugService : OpenBugsService, private datePipe: DatePipe) { }

  

  ngOnInit(): void {

    this.viewOpenBugs();
    // this.inputBugReport();
  }
  
  
  BugReports : BugReport[];


  inputBugReport(){
  let roles1:Role = new Role(1, "user");
  let roles2:Role = new Role(2, "admin");
  let user1:User = new User(0,"user1", "p1", 0, roles1);
  let user2:User = new User(1, "user2", "p2", 0, roles2);
  this.BugReports = [new BugReport(0, user1, user2, "asdf", "asdf", "asf", "asd", "asdf", new Date(), "open")];
  }

  
    viewOpenBugs(){
      this.bugService.viewOpenBugs().subscribe(
        (data) =>{
          console.log(data);
          console.log(data[0]);
          this.BugReports = data; 
        },
        () => {
          console.log("There was an error grabbing your bug reports!");
        }
      )

    }

  
  }

