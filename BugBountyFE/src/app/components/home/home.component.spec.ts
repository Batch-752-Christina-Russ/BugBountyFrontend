import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { OpenBugsComponent } from '../open-bugs/open-bugs.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { Router, RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterModule],
      providers: [Router]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display open bugs', () => {
      expect(this.OpenBugsComponent).toBeInstanceOf(OpenBugsComponent);
  });

  it('should display the leaderboard', () => {
    expect(this.LeaderboardComponent).toBeInstanceOf(LeaderboardComponent);   
  });

  it('should redirect to login'), () => {
    expect(this.component.loginRedirect).toHaveBeenCalled();
  }
});
