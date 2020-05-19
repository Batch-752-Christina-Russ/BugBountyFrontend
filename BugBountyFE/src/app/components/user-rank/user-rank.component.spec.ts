import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRankComponent } from './user-rank.component';

describe('UserRankComponent', () => {
  let component: UserRankComponent;
  let fixture: ComponentFixture<UserRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
