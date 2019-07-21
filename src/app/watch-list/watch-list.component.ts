import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user/user.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  @Input() User: User;

  public navItems = [
    {name: 'Autocomplete', route: 'autocomplete'},
    {name: 'Button', route: 'button'},
    {name: 'Button Toggle', route: 'button-toggle'},
    {name: 'Card', route: 'card'},
    {name: 'Chips', route: 'chips'},
    {name: 'Checkbox', route: 'checkbox'},
    {name: 'Dialog', route: 'dialog'},
    {name: 'Gestures', route: 'gestures'},
    {name: 'Grid List', route: 'grid-list'},
    {name: 'Icon', route: 'icon'},
    {name: 'Input', route: 'input'},
    {name: 'Input Container', route: 'input-container'},
    {name: 'List', route: 'list'},
    {name: 'Menu', route: 'menu'},
    {name: 'Live Announcer', route: 'live-announcer'},
    {name: 'Overlay', route: 'overlay'},
    {name: 'Portal', route: 'portal'},
    {name: 'Projection', route: 'projection'},
    {name: 'Progress Bar', route: 'progress-bar'},
    {name: 'Progress Spinner', route: 'progress-spinner'},
    {name: 'Radio', route: 'radio'},
    {name: 'Ripple', route: 'ripple'},
    {name: 'Select', route: 'select'},
    {name: 'Sidenav', route: 'sidenav'},
    {name: 'Slider', route: 'slider'},
    {name: 'Slide Toggle', route: 'slide-toggle'},
    {name: 'Snack Bar', route: 'snack-bar'},
    {name: 'Tabs', route: 'tabs'},
    {name: 'Toolbar', route: 'toolbar'},
    {name: 'Tooltip', route: 'tooltip'},
    {name: 'Platform', route: 'platform'}
  ];

  constructor() { }

  ngOnInit() {

  }

}
