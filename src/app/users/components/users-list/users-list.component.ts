import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input('users')
  users: IUser[];

  constructor() { }

  ngOnInit() {
  }

}
