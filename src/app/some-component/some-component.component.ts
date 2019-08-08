import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']
})
export class SomeComponentComponent implements OnInit, AfterViewInit {
  private a: number = 1;
  test_some_number:number = 0;
  @ViewChild('title', {static: true, read: ElementRef})
  titleSomeRef: ElementRef;
  @ViewChild('ourMain', {static: true})
  someDom: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  onClick() {
    this.titleSomeRef.nativeElement.style.backgroundColor = 'green';
  }

}
