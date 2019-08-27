import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { usersAction, usersActionType } from './user.actions';
import { IUser } from '../User';

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState = adapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(usersAction, (state, {users}) => adapter.addMany(users, state))
);
