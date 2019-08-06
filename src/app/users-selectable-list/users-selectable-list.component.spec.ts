import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSelectableListComponent } from './users-selectable-list.component';

describe('UsersSelectableListComponent', () => {
  let component: UsersSelectableListComponent;
  let fixture: ComponentFixture<UsersSelectableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSelectableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSelectableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
