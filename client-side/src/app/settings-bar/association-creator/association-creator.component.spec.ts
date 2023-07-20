import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationCreatorComponent } from './association-creator.component';

describe('AssociationCreatorComponent', () => {
  let component: AssociationCreatorComponent;
  let fixture: ComponentFixture<AssociationCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociationCreatorComponent]
    });
    fixture = TestBed.createComponent(AssociationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
