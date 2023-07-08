import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void {
    console.log('You are logged out!');
    localStorage.setItem('isLoggedIn', 'false');
    // service sign in
    this.router.navigate(['/login']);
  }
}
