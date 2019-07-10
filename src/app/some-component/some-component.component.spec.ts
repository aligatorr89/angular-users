import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponentComponent } from './some-component.component';

describe('SomeComponentComponent', () => {
  let component: SomeComponentComponent;
  let fixture: ComponentFixture<SomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have property test_some_number', () => {
    expect(component.test_some_number).toBeDefined();
  });

  it('should have property titleSomeRef type ElementRef', () => {
    expect(component.titleSomeRef);
  });

  it('should have method onClick', () => {
    expect(component.onClick).toBeDefined();
  });

  it('should have method onClick which changes background color', () => {
    // component.onClick
  });

});
