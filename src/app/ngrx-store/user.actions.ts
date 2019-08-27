import { createAction, props } from '@ngrx/store';
import { IUser } from '../User';

export const usersActionType = '[Users] Users';
export const usersAction = createAction(usersActionType, props<{users: IUser[]}>());
