import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'angular-users';
  someNumber: number = 1;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.someNumber++;
  }

}
