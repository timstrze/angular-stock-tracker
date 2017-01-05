import { Component, OnInit, Input } from '@angular/core';
import { User } from './user/user.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  @Input() User: User;

  constructor() { }

  ngOnInit() {

  }

}
