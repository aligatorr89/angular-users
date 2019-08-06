import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let componentDomDebug: DebugElement;
  let componentDom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    componentDomDebug = fixture.debugElement;
    componentDom = componentDomDebug.nativeElement;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(`should have property title 'angular-users'`, () => {
    expect(component.title).toEqual('angular-users');
  });

  test(`should have property someNumber`, () => {
    expect(component.someNumber).toBe(1);
  });

  test('should render title in a h1 tag', () => {
    expect(componentDomDebug.nativeElement.querySelector('h1').textContent).toContain('Welcome to angular-users!');
  });

  test('should have logo', () => {
    const element = componentDomDebug.nativeElement.querySelector('img[src^="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="]');
    expect(element).toBeTruthy();
  });

  test('should have another title in a h2 tag', () => {
    expect(componentDomDebug.nativeElement.querySelector('h2').textContent).toContain('List of links');
  });

  test('should have a unordered list of links', () => {
    const ul = componentDomDebug.query(By.css('ul'));
    expect(ul).toBeTruthy();

    expect(ul
      .query(By.css('li:nth-child(1)'))
      .query(By.css('button'))
      .nativeElement.textContent
    )
    .toContain('Click me to add');

    expect(ul
      .query(By.css('li:nth-child(2)'))
      .query(By.css('h2'))
      .query(By.css('nav'))
      .query(By.css('a'))
      .nativeElement.getAttribute('routerLink')
    )
    .toBe('/users');

    expect(ul
      .query(By.css('li:nth-child(3)'))
      .query(By.css('h2'))
      .query(By.css('nav'))
      .query(By.css('a'))
      .nativeElement.getAttribute('routerLink')
    )
    .toBe('/users-table');
  });

  test('should have method click which adds someNumber', async(() => {
    // spyOn(component, 'click');
    // fixture.whenStable().then(() => {
    //   expect(component.click).toHaveBeenCalled();
    //   expect(component.someNumber).toBe(2);
    // });
    component.click();
    expect(component.someNumber).toBe(2);
    component.click();
    expect(component.someNumber).toBe(3);
  }));

});
