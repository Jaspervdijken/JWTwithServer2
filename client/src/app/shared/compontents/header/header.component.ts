import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Set authService to check if user is logged in, in order to show the logout button
  auth: AuthService;
  
  constructor(private _auth: AuthService, private router: Router) {
    this.auth = _auth;
    
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['logout']);
  }

}
