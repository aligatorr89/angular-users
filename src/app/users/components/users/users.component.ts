import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IUser } from '../../../User';
import { UsersService } from '../../services/users.service';
import * as UsersAction from '../../actions/user.actions';
import * as fromUsers from '../../reducers/user.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users$: Observable<IUser[]>;

    constructor(private usersService: UsersService, private store: Store<IUser[]>) {
      // this.users$ = store.pipe(select(fromUsers.reducer));
    }

    ngOnInit() {
      this.getUsers();
    }

    getUsers() {
      this.users$ = this.usersService.getUsers();
    }

    getUsersStore() {
      console.log('usersStore here!');
      this.store.dispatch(UsersAction.getUsers({users: []}));
    }
}
