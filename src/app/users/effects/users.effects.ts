import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadUsers, LoadUsersSuccess, GetUsers, UsersActionTypes } from '../actions/user.actions';
import { EMPTY } from 'rxjs';
import { mergeMap, concatMap, map, catchError } from 'rxjs/operators';

import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private usersService: UsersService) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.LoadUsers),
    () => {
      return this.usersService.getUsers();
    },
    map(users => new LoadUsersSuccess({users})),
    catchError(() => EMPTY)
  )
}
