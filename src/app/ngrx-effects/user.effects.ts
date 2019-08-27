import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../angular-services/users.service';
import { usersAction } from '../ngrx-store/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(usersAction.type),
    mergeMap(() => this.usersService.getUsers().pipe(
      map(users =>  usersAction({users}))
    ))
  ));
}
