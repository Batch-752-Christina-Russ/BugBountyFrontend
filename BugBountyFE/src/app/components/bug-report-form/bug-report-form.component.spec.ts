import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReportFormComponent } from './bug-report-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BugReport } from 'src/app/models/BugReport';
import { BugReportService } from 'src/app/services/bug-report.service';

import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('BugReportFormComponent', () => {
  let component: BugReportFormComponent;
  let fixture: ComponentFixture<BugReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugReportFormComponent ],
      imports :[
        FormsModule, HttpClientTestingModule,ReactiveFormsModule 
      ],
      providers: [BugReportService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new pending bug report to the bug report array', () =>{
    let bugReport:BugReport;
    let roles1:Role = new Role(1, "user");
    let roles2:Role = new Role(2, "admin");
    let user1:User = new User(0,"user1", "p1", 0, roles1);
    let user2:User = new User(1, "user2", "p2", 0, roles2);
    component.bugReport = new BugReport(0, user1, user2, "Project", "location", "description", "steps", "high", new Date(),"pending");
    expect(component.bugReport).toBeTruthy();
  });
});
