import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { Group } from 'src/models/group';
import { GroupsService } from 'src/services/groups.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  sidebarVisible: boolean = true;
  menuItems: MenuItem[] = [];
  dynamicMenuItems: MenuItem[] = [];

  constructor(
    private router: Router, 
    private groupsService: GroupsService, 
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.groupsService.getGroupsByUserId(parseInt(userId))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      )
      .subscribe((groups: Group[]) => {
        this.addMenuItems(groups);
      })
    }
  }

  addMenuItems(groups: Group[]): void {
    this.dynamicMenuItems.push({ label: 'Manage camps', icon: 'pi pi-users', routerLink: '/groups' });
    this.dynamicMenuItems.push({ label: 'Calendar', icon: 'pi pi-calendar' });
    groups.forEach((group) => {
      this.dynamicMenuItems.push({label: group.name, icon: 'pi pi-users', routerLink: `groups/group/${group.id}`});
    });
    this.menuItems = this.dynamicMenuItems;
  }

  logOut(): void {
    console.log('You are logged out!');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }

  handleError(error: HttpErrorResponse) {
    console.log('An error occurred:', error);
    this.showSnackbar(error.error);
    return throwError('Something went wrong.');
  }

  showSnackbar(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Snackbar Message', detail: 'This is a snackbar-like message.' });
  }
}
