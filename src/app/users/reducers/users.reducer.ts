import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UsersActionTypes, UsersActionUnion } from '../actions/user.actions';
import { IUser } from '../../User';

export const usersFeatureKey = 'users';

// export interface State extends EntityState<IUser> {}
export interface State {
  users: IUser[]
}
// const adapter = createEntityAdapter<IUser>();

// export const initialState: State = adapter.getInitialState();
export const initialState: State = {
  users: []
}

export function reducer(state = initialState, action: UsersActionUnion): State {
  switch (action.type) {
    case UsersActionTypes.LoadUsersSuccess:
      state = {...state, users: action.payload.users}
      console.log('LoadUsersSuccess', state);
      return state;
    default:
      console.log('default reducer', state);
      return state;
  }
}
