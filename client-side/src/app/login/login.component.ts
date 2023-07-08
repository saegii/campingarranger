import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  signUp() {
    console.log('Signing up with email:', this.email);
    localStorage.setItem('isLoggedIn', 'true');
    // service sign up
  }

  signIn() {
    console.log('Signing in with email:', this.email);
    localStorage.setItem('isLoggedIn', 'true');
    // service sign in
    this.router.navigate(['/dashboard']);
  }

}
