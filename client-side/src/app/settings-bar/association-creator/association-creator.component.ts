import { Component } from '@angular/core';

@Component({
  selector: 'app-association-creator',
  templateUrl: './association-creator.component.html',
  styleUrls: ['./association-creator.component.scss']
})
export class AssociationCreatorComponent {
  isShown() {
    return false;
  }
  createAssociation(): void {
    throw new Error('Method not implemented.');
  }

}
