import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  normal = false;
  admin = false;
  constructor(private r: Router,  private userService: UsersService) {

  }
 

  adminlogout() {
    this.admin = false;
    this.r.navigate(['/home']);
  }

 

  userlogout() {
    this.normal = false;
    this.r.navigate(['/home']);

  }

  title = 'Online Book Store Management System';
}
