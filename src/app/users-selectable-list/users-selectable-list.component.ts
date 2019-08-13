import { Component, OnInit, Input } from '@angular/core';
import { IUser } from "../User";
import { UserSelectionService } from "../angular-services/user-selection.service";

@Component({
  selector: 'app-users-selectable-list',
  templateUrl: './users-selectable-list.component.html',
  styleUrls: ['./users-selectable-list.component.css']
})
export class UsersSelectableListComponent implements OnInit {
  @Input()
  users: IUser[];

  constructor(private userSelectionService: UserSelectionService) { }

  ngOnInit() {
    // this.userSelectionService.selected$.subscribe(user => this.selectUser(user));
  }

  selectUser(user: IUser) {
    console.log(user);
    this.userSelectionService.select(user);
  }
}
