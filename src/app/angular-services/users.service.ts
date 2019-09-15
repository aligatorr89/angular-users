import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser, USERS_URL } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    console.log('UsersService.getUsers()');
    return this.http.get<IUser[]>(USERS_URL);
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(USERS_URL + id);
  }
}
