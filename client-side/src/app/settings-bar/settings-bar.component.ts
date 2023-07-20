import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { catchError } from 'rxjs';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { GroupCreatorComponent } from './group-creator/group-creator.component';
import { AssociationCreatorComponent } from './association-creator/association-creator.component';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss']
})
export class SettingsBarComponent {

  @ViewChild('overlayPanel') overlayPanel!: OverlayPanel;

  menuItems: MenuItem[];
  user!: User;
  showProfileMenu: boolean = false;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private messagingService: MessagingService,
    private groupCreator: GroupCreatorComponent,
    private associationCreator: AssociationCreatorComponent,
    private cdr: ChangeDetectorRef
    ) {
    this.menuItems = [
      { label: 'Create Association', icon: 'pi pi-plus', command: () => {
        this.associationCreator.createAssociation();
        cdr.detectChanges();
      }},
      { label: 'Create Camp', icon: 'pi pi-plus', command: () => {
        this.groupCreator.createCamp();
        cdr.detectChanges();
      }},
    ];
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(parseInt(userId))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.messagingService.handleRequestError(error);
        })
      )
      .subscribe((user: User) => {
        this.user = user;
      });
    }
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  isAssociationCreationShown() {
    return this.associationCreator.isShown();
  }

  isGroupCreationShown() {
    return this.groupCreator.isShown();
  }

  openDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openUserInfo(event: Event) {
    event.preventDefault();
    this.overlayPanel.toggle(event);
  }
}
