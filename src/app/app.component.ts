import { Component } from '@angular/core';
import { User } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [User]
})
export class AppComponent {

  public User: User = new User();

  constructor() {
    // Load the User data
    this.User.load();
  }
}
