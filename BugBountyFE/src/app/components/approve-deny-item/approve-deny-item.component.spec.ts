import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyItemComponent } from './approve-deny-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApproveDenyItemComponent', () => {
  let component: ApproveDenyItemComponent;
  let fixture: ComponentFixture<ApproveDenyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDenyItemComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyItemComponent);
    component = fixture.componentInstance;
    component.bugReport = {
      id: 1,
      reporter: null,
      resolver: null,
      application: 'Donkeys',
      location: 'DonkeyService',
      description: 'Missing donkeys',
      steps: 'Open app',
      severity: 'Critical',
      date: null,
      status: 'pending'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#approve()', ()=> {
    it('should change status to open', () => {
      component.approve();
      expect(component.bugReport.status).toEqual('open');
    });
  });

  describe('#deny()', ()=> {
    it('should change status to delete', () => {
      component.deny();
      expect(component.bugReport.status).toEqual('delete');
    });
  });
});
