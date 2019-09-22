import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AngularMaterialModule } from '../../../angular-material.module';
import { IUser, mockedUsers } from '../../../shared/models/User';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { UsersListComponent } from '../users-list/users-list.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let componentDom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent, UsersTableComponent, UsersListComponent ],
      imports: [
        HttpClientTestingModule,
        AngularMaterialModule
      ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    componentDom = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
