import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cm-cinema';
  isAdmin: boolean = false;

  switchToUser() {
    this.isAdmin = false;
  }

  switchToAdmin() {
    this.isAdmin = true;
  }
}
