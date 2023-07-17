import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent {

  @ViewChild('overlayPanel') overlayPanel!: OverlayPanel;

  menuItems: MenuItem[];
  showProfileMenu: boolean = false;
  user!: User;

  constructor(private router: Router, private userService: UserService, private messageService: MessageService) {
    this.menuItems = [
      { label: 'Create Camp', icon: 'pi pi-plus', command: () => this.createCamp() },
    ];
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(parseInt(userId))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      )
      .subscribe((user: User) => {
        this.user = user;
      })
    }
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  createCamp() {
    console.log('Create camp action triggered');
  }

  openDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openUserInfo(event: Event) {
    event.preventDefault();
    this.overlayPanel.toggle(event);
  }

  handleError(error: HttpErrorResponse) {
    console.log('An error occurred:', error);
    this.showError(error.error);
    return throwError('Something went wrong.');
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}
