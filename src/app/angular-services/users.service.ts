import { Injectable } from '@angular/core';
import {  HttpClient }    from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users/';
  private usersData: IUser[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    console.log('this is UsersService');
    return this.http.get<IUser[]>(this.usersUrl).pipe(map(res => this.usersData = res));
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.usersUrl + id);
  }

  getCachedUsers(): (IUser[]|Observable<IUser[]>) {
    if(this.usersData) {
      return this.usersData;
    }
    else {
      return this.getUsers();
    }
  }
}
