import { Component, OnInit } from '@angular/core';
import {SwserviceService} from '../swservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SwserviceService]
})
export class HeaderComponent implements OnInit {

  constructor(private swservice: SwserviceService) { }

  ngOnInit() {
  }

}
