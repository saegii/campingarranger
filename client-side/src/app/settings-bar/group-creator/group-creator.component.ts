import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-group-creator',
  templateUrl: './group-creator.component.html',
  styleUrls: ['./group-creator.component.scss']
})
export class GroupCreatorComponent {

  displayCampCreation: boolean = false;
  campCreationName!: string;
  user!: User;
  users!: User[];
  selectedUsers!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers()
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    )
    .subscribe((users: any) => {
      this.users = users;
    });
  }

  isShown() {
    return this.displayCampCreation;
  }

  handleError(error: HttpErrorResponse): any {
    throw new Error('Method not implemented.');
  }

  createCamp() {
    this.displayCampCreation = true;
  }

  closeCampCreation() {
    this.displayCampCreation = false;
  }
}
