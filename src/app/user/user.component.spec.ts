import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';

import { UserComponent } from './user.component';
// import { UsersService } from '../angular-services/users.service';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userNativeElement: HTMLElement;
  let userDebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        // UsersService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userDebugElement = fixture.debugElement;
    userNativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a method getUser', () => {
  //   expect(component.getUser).toBeDefined();
  // });
});
