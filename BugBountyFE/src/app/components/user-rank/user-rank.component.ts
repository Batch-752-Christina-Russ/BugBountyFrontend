import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-rank',
  templateUrl: './user-rank.component.html',
  styleUrls: ['./user-rank.component.css']
})
export class UserRankComponent implements OnInit {
  userRank : Object;
  constructor(private userService : UserService) { }
  userName:String;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('username');
    //this.userName = "new";
    this.getUserRank(this.userName);
  }

  getUserRank(userName: String){
      this.userService.getRank(userName).subscribe(data => {this.userRank = data}, () => {console.log("Error: user rank cannot be obtained")});
      console.log(this.userRank);
    }

}
