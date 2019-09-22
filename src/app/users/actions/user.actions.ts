import { Action, createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/models/User';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  GetUsers = '[Users] Get Users'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;
  constructor(public payload: IUser[]) {}
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GetUsers;
}

export type UsersActionUnion = LoadUsers | GetUsers | LoadUsersSuccess;

// export const getUsersType = '[Users] GetUsers';
// export const getUsers = createAction(getUsersType);
//
// export const loadUsersType = '[Users] LoadUsers';
// export const loadUsers = createAction(loadUsersType, props<{users: IUser[]}>());
