import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as UsersAction from './user.actions';
import { IUser } from '../User';

export interface State extends EntityState<IUser> {
  // additional state property
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

export const userReducer = createReducer(
  initialState,
  // on(getUsersActions.selectUser, (state, { userId }) => {
  //   return { ...state, selectedUserId: userId };
  // }),
  on(UsersAction.getUsers, (state, { users }) => {
    console.log('users to store', users);
    return adapter.addMany(users, { ...state, selectedUserId: null });
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
