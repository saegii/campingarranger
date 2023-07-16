import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {

  groups: Group[] = [
    { id: '1', name: 'Lager 2022' },
    { id: '2', name: 'Lager 2023' },
    // Add more group objects
  ];

  constructor(private router: Router) { }

  editGroup(group: Group) {
    // Handle edit logic
  }

  leaveGroup(group: Group) {
    // Handle leave logic
  }

  navigateToGroupDetails(groupId: number) {
    this.router.navigate(['/group', groupId]);
  }
}
