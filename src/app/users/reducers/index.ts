import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export interface UsersState {
  [fromUsers.usersFeatureKey]: fromUsers.State
}

export interface AppState extends UsersState {}

export const reducers: ActionReducerMap<UsersState> = {
  [fromUsers.usersFeatureKey]: fromUsers.reducer
};

// export const selectFeature = (state: AppState) => state.users;
export const selectUsersState = createFeatureSelector<UsersState>(fromUsers.usersFeatureKey);

export const getUsersSelector = createSelector(
  selectUsersState,
  (state: UsersState) => state[fromUsers.usersFeatureKey][fromUsers.allUsersKey]
);
