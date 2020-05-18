import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public topTenList : User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getTopTen();
  }
 
  getTopTen() : void{
    this.userService.getLeaderboard()
    .subscribe((data)=>{
        this.topTenList = data;
      },
      ()=>{
        console.log('Could not retrieve top ten');
      }
      )
  }
}
