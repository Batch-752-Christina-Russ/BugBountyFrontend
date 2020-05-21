import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OpenBugsComponent } from './open-bugs.component';
import { BugReport } from '../../models/BugReport';
import { DatePipe } from '@angular/common';
import { Role } from '../../models/Role';
import { User } from '../../models/User';


describe('OpenBugsComponent', () => {
  let component: OpenBugsComponent;
  let fixture: ComponentFixture<OpenBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBugsComponent ],
      imports: [HttpClientTestingModule],
      providers: [DatePipe, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBugsComponent);
    component = fixture.componentInstance;
    let bugReport:BugReport;
    let roles1:Role = new Role(1, "user");
    let roles2:Role = new Role(2, "admin");
    let user1:User = new User(0,"user1", "p1", 0, roles1);
    let user2:User = new User(1, "user2", "p2", 0, roles2);
    component.BugReports = [new BugReport(1, user1, user2, 'Donkeys', 'DonkeyService', 'Missing donkeys', 'Open app',
 'Critical', null,'open'
    )];
    fixture.detectChanges();
  });

  describe('#viewOpenBugs', ()=> {
    it('should view the bugs', () => {
      component.viewOpenBugs();
      expect(component.BugReports.pop().status).toEqual('open');
    });
  });
});