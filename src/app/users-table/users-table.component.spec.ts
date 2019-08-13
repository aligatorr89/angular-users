import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialModule } from '../angular-material.module';

import { UsersTableComponent } from './users-table.component';
import { IUser } from '../User';

describe('UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;
  let componentDom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableComponent ],
      imports: [
        HttpClientTestingModule,
        AngularMaterialModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    componentDom = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(componentDom).toMatchSnapshot()
  })
});