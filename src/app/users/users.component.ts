
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import  { Observable } from 'rxjs';
import { UsersService } from '../angular-services/users.service';
import { IUser } from '../User';
import { SomeComponentComponent } from '../some-component/some-component.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  users:IUser[];
  currentUser:IUser;
  users$: Observable<IUser[]>;
  @ViewChild(SomeComponentComponent, {static: false})
  someComponentChild: SomeComponentComponent;
  @ViewChild('title', {static: true, read: ElementRef})
  titleSomeRef: ElementRef;
  @ViewChild('ourMain', {static: true})
  someDom: ElementRef;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    console.log('this is UsersComponent');
    this.getUsers();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  onSelect(user: IUser) {
    this.currentUser = user;
  }

  getUsers() {
    this.users$ = this.usersService.getUsers();
  }

  toggleUserList() {
    const currentDisplay = this.someDom.nativeElement.style.display;
    if(currentDisplay !== 'none') {
      this.someDom.nativeElement.style.display = 'none';
    }
    else {
      this.someDom.nativeElement.style.display = '';
    }
  }
}
