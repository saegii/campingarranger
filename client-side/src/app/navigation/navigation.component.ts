import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  sidebarVisible: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  menuModel: MenuItem[] = [
    { label: 'Groups', icon: 'pi pi-users' },
    { label: 'Calendar', icon: 'pi pi-calendar' }
  ];

  logOut(): void {
    console.log('You are logged out!');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
