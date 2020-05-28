import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//TODO: remove OnInit?
export class LoginComponent {
  public username: string;
  public password: string;
  public errorMsg: string;

  constructor(private auth: AuthService, private router: Router) {};

  
  onSubmit() {
    //Call auth.login, act on result
    this.auth.login(this.username, this.password)
    .subscribe(
      result => this.router.navigate(['secret']),
      err => this.errorMsg = 'Uw gebruikersnaam of wachtwoord is incorrect...'
    );
      
    //console.log(this.username);
    //console.log(this.password);

  }
  

}
