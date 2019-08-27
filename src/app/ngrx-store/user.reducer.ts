import { Action, createReducer, on} from '@ngrx/store';
import { usersAction, usersActionType } from './user.actions';

import { IUser } from '../User';

const userReducer = createReducer(
  on(usersAction, (state, {users}) => ({
      loaded: true,
      loading: false,
      ids: users.map(user => user.id)
  }))
);
