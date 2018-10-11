import { Component } from '@angular/core';
import { UserService } from '../../../index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private userService: UserService,
  ) { }

  login() {
    const user = {
      name: 'root',
      pass: 'root'
    };

    this.userService.login(user).subscribe(data => {
      console.log(data);
    });
  }

  getUser() {
    this.userService.get(1).subscribe(data => {
      console.log(data);
    });
  }
}
