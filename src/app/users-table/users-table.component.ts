import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { IUser } from '../User';
import { UsersService } from '../angular-services/users.service';
import * as UsersAction from '../ngrx-store/user.actions';
import * as fromUsers from '../ngrx-store/user.reducer';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit, OnDestroy {

  private usersSubscription$: Subscription;
  private users$: Observable<IUser[]>;

  constructor(private usersService: UsersService, private store: Store<IUser[]>) {
    console.log('constructor');
    // this.users$ = store.pipe(select(fromUsers.reducer));
  }

  displayedCols: string[] = ['select', 'id', 'name', 'email'];
  dataSource = new MatTableDataSource<IUser>();
  selection = new SelectionModel<IUser>(true, []);

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  ngOnInit() {
    this.getUsers();
    this.dataSource.sort = this.sort;
    // this.getUsersStore();
  }

  ngOnDestroy(): void {
    this.usersSubscription$.unsubscribe();
  }

  getUsers() {
    this.usersSubscription$ = this.usersService.getUsers().subscribe(users => this.dataSource.data = users);
  }

  getUsersStore() {
    console.log('usersStore here!');
    this.store.dispatch(UsersAction.getUsers({users: []}));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.sumId();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
     this.selection.clear() :
     this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  sumId() {
    return this.dataSource.filteredData.map(u => u.id).reduce((acc, value) => acc + value, 0);
  }



}
