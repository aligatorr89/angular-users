import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IUser } from '../../../User';
import * as UsersAction from '../../actions/user.actions';
import * as selectUsers from '../../reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users$: Observable<IUser[]>;

    constructor(private store: Store<selectUsers.UsersState>) {
      this.users$ = store.pipe(
        select(selectUsers.getUsersSelector)
      );
    }

    ngOnInit() {
      this.getUsers();
    }

    getUsers() {
      this.store.dispatch(new UsersAction.LoadUsers());
    }
}
