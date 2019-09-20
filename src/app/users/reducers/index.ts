import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import { IUser } from '../../User';

export const allUsersFeatureKey = 'allUsers';

export interface UsersState {
  [allUsersFeatureKey]: fromUsers.State
}

export interface AppState extends UsersState {}

export const reducers: ActionReducerMap<UsersState> = {
  [allUsersFeatureKey]: fromUsers.reducer
};

// export const selectFeature = (state: AppState) => state.users;
export const selectUsersState = createFeatureSelector<UsersState>(fromUsers.usersFeatureKey);

export const getUsersSelector = createSelector(
  selectUsersState,
  (state: UsersState) => state[fromUsers.usersFeatureKey]
);

// export interface State extends fromRoot.State {
//   starships: StarshipsState;
// }
//
//
// export const selectStarshipsState = createFeatureSelector<StarshipsState>('starships');
//
// export const selectShips = createSelector(selectStarshipsState, (state) => state.ships);
// export const getAllShips = createSelector(selectShips, fromShips.getAllShips);
