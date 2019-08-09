import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { AngularMaterialModule } from '../angular-material.module';
// import { SelectionModel } from '@angular/cdk/collections';
import { IUser } from '../User';
import { UsersService } from '../angular-services/users.service';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableComponent ],
      imports: [
        AngularMaterialModule
      ],
      providers: [
        UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    // expect(component).toBeTruthy();
  });
});
