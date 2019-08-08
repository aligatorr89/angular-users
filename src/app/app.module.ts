import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
<<<<<<< HEAD
import { UsersTableComponent } from './users-table/users-table.component';
import { SomeComponentComponent } from './some-component/some-component.component';
=======

>>>>>>> jest-migration
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NameIconPipe } from './angular-pipes/name-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    // UsersComponent,
    // UserDetailComponent,
    UsersTableComponent,
    SomeComponentComponent,
=======
>>>>>>> jest-migration
    HomeComponent,
    NameIconPipe
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
