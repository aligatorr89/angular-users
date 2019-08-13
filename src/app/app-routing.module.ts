
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
<<<<<<< HEAD
import { UsersTableComponent } from "./users-table/users-table.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users-table', component: UsersTableComponent}
=======
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserComponent }  from "./user/user.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users-table', component: UsersTableComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserComponent}
>>>>>>> dev-ahead
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
