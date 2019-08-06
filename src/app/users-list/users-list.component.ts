import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from "../User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output('userEvent')
  userEmmiter = new EventEmitter<IUser>();
  private userSelectedClass: string = 'user-selected';

  private findTr(el: Element) {
    while(el) {
      if(el.tagName === 'TR') {
        return el;
      }
      el = el.parentElement;
    }
  }

  constructor() { }

  ngOnInit() {
    console.log('this is UsersListComponent')
  }

  onSelect(user: IUser, event) {
    this.userEmmiter.emit(user);
    const tr: Element = this.findTr(event.target);

    const currentClassArray = tr.getAttribute('class').split(' ');
    const index = currentClassArray.indexOf(this.userSelectedClass);
    if(index < 0) {
      currentClassArray.push(this.userSelectedClass);
    }
    else {
      currentClassArray.splice(index, 1);
    }
    tr.setAttribute('class', currentClassArray.join(' '));
  }

}
