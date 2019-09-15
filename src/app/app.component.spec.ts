import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { SomeComponentComponent } from './some-component/some-component.component';
import { NameIconPipe } from './angular-pipes/name-icon.pipe';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        SomeComponentComponent,
        NameIconPipe,
        UsersTableComponent,
        UserComponent,
        UserDetailComponent,
        UsersComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        AngularMaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test('should have router-outlet element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
