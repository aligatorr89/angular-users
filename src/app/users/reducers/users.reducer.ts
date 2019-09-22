import { Action, ActionReducerMap } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { UsersActionTypes, UsersActionUnion } from '../actions/user.actions';
import { IUser } from '../../User';

export const usersFeatureKey = 'users';
export const allUsersKey = 'allUsers';

// export interface State extends EntityState<IUser> {}
export interface State {
  [allUsersKey]: IUser[]
}
// const adapter = createEntityAdapter<IUser>();

// export const initialState: State = adapter.getInitialState();
export const initialState: State = {
  [allUsersKey]: []
};

export function reducer(state: State = initialState, action: UsersActionUnion): State {
  switch (action.type) {
    case UsersActionTypes.LoadUsersSuccess:
      return {...state, [allUsersKey]: action.payload};
    default:
      return state;
  }
}
