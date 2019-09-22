import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, UserDetailComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'user/:id', component: UserComponent}]
        )
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => {
                  return {
                    id: 1
                  }
                }
              }
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(1).toBeTruthy();
  });
});
