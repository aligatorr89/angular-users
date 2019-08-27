import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  protected usersUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    console.log('UsersService', 'getUsers()')
    return this.http.get<IUser[]>(this.usersUrl);
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.usersUrl + id);
  }
}
