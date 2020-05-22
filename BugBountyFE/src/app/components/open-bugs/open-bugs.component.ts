import { Component, OnInit } from '@angular/core';
import { BugReport } from '../../models/BugReport';
import { HttpClient } from '@angular/common/http';
import { OpenBugsService } from '../../services/openbugs.service';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-open-bugs',
  templateUrl: './open-bugs.component.html',
  styleUrls: ['./open-bugs.component.css']
})
export class OpenBugsComponent implements OnInit {

  constructor(private bugService: OpenBugsService, private datePipe: DatePipe) { }



  ngOnInit(): void {

    this.viewOpenBugs();

  }


  BugReports: BugReport[];




  viewOpenBugs() {
    this.bugService.viewOpenBugs().subscribe(
      (data) => {
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

