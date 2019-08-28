import { createAction, props } from '@ngrx/store';
import { IUser } from '../User';

export const getUsersType = '[Users] GetUsers';
export const getUsers = createAction(getUsersType, props<{users: IUser[]}>());
