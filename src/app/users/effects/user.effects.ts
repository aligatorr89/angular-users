import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import * as UsersAction from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersAction.getUsers.type),
    exhaustMap(() => this.usersService.getUsers().pipe(
        map(users =>  UsersAction.getUsers({users}))
      ))
    ));
}
