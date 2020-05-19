import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyBugComponent } from './approve-deny-bug.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ApproveDenyBugComponent', () => {
  let component: ApproveDenyBugComponent;
  let fixture: ComponentFixture<ApproveDenyBugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDenyBugComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
