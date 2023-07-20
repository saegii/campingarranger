import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';
import { Group } from 'src/models/group';
import { GroupsService } from 'src/services/groups.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  groups!: Group[];

  constructor(
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
        this.groups = groups;
      })
    }
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
