import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {SwserviceService} from '../swservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SwserviceService]
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(private swService: SwserviceService) {
  }

  ngOnInit() {
    this.swService.getMyUserGitHub().subscribe(data => {
      this.user = data;
      console.log(this.user.name);
      console.log(this.user.avatar_url);
    });
  }
}
