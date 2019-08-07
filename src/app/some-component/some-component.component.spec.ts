import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SomeComponentComponent } from './some-component.component';

describe('SomeComponentComponent', () => {
  let component: SomeComponentComponent;
  let fixture: ComponentFixture<SomeComponentComponent>;
  let someComponentDebugElement: DebugElement;
  let someComponentNativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentComponent);
    component = fixture.componentInstance;
    someComponentDebugElement = fixture.debugElement;
    someComponentNativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have property test_some_number', () => {
    expect(component.test_some_number).toBeDefined();
  });

  test('should have property titleSomeRef', () => {
    expect(component.titleSomeRef).toBeTruthy();
  });

  test('should have method onClick', () => {
    expect(component.onClick).toBeDefined();
  });

  test('should have method onClick which changes background color', fakeAsync(() => {
    someComponentNativeElement.querySelector('div').click();
    expect(someComponentNativeElement.querySelector('div').style.backgroundColor).toBe('green');
    // fixture.detectChanges();
    // flush();
    // fixture.detectChanges();
  }));

  test('should have root element div', () => {
    expect(someComponentNativeElement.tagName.toLowerCase()).toBe('div');
  });

  test('should html match the required', () => {
    // expect(fixture).toMa
  });

});
