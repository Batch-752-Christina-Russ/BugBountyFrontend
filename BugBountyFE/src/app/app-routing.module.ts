import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ApproveDenyBugComponent } from './components/approve-deny-bug/approve-deny-bug.component';
import { BugReportFormComponent } from './components/bug-report-form/bug-report-form.component';
import { OpenBugsComponent } from './components/open-bugs/open-bugs.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserRankComponent } from './components/user-rank/user-rank.component';
import { ResolveComponent } from './components/resolve/resolve.component';

const routes: Routes = [
  { path: '', redirectTo:'index', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'index', component:LoginComponent },
  { path: 'pendingbug', component:ApproveDenyBugComponent },
  {path:"bug-report-form", component:BugReportFormComponent},
  {path : 'open', component:OpenBugsComponent},
  {path: 'leaderboard', component:LeaderboardComponent},
  {path: 'rank', component:UserRankComponent},
  { path: 'resolvebug', component:ResolveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
