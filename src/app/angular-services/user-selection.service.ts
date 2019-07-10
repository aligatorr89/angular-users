import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { IUser } from "../User";

@Injectable({
  providedIn: 'root'
})
export class UserSelectionService {

  private _selected: BehaviorSubject<IUser> = new BehaviorSubject(null);
  selected$: Observable<IUser> = this._selected.asObservable().pipe(filter(user => !!user));

  constructor() { }

  select(user:IUser) {
    this._selected.next(user);
  }
}
