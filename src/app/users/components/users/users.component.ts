import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IUser } from '../../../User';
import * as UsersAction from '../../actions/user.actions';
import * as fromUsers from '../../reducers/users.reducer';
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
        tap(u => console.log(u)),
        select(selectUsers.getUsersSelector)
      );
      // this.users$ = store.select(state => state.users.users ? state.users.users : state.users);
    }

    ngOnInit() {
      this.getUsers();
    }

    getUsers() {
      this.store.dispatch(new UsersAction.LoadUsers());
    }
}
