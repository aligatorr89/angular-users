import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersComponent } from './components/users/users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import * as usersReducer from './reducers/users.reducer';
import { UsersEffects } from './effects/users.effects';

@NgModule({
  declarations: [UsersComponent, UsersTableComponent, UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent},
      {path: 'user/:id', component: UserComponent}
    ]),
    StoreModule.forFeature('users', usersReducer.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ]
})
export class UsersModule { }
