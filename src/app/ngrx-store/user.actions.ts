import { createAction, props } from '@ngrx/store';
import { IUser } from '../User';

const usersAction = createAction('[UsersTable] Users', props<IUser[]>());
