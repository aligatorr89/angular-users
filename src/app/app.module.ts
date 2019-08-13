import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
<<<<<<< HEAD

=======
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
>>>>>>> dev-ahead
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { SomeComponentComponent } from './some-component/some-component.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { NameIconPipe } from './angular-pipes/name-icon.pipe';
=======
import { UserComponent } from './user/user.component';
import { NameIconPipe } from './angular-pipes/name-icon.pipe';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersSelectableListComponent } from './users-selectable-list/users-selectable-list.component';
>>>>>>> dev-ahead

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    UsersComponent,
    UserDetailComponent,
>>>>>>> dev-ahead
    UsersTableComponent,
    SomeComponentComponent,

    HomeComponent,
<<<<<<< HEAD
    NameIconPipe
=======
    UserComponent,
    NameIconPipe,
    UsersListComponent,
    UsersSelectableListComponent
>>>>>>> dev-ahead
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
