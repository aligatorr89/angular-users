import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs'
import { UsersService } from "../angular-services/users.service";
import { IUser } from "../User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user$ = this.usersService.getUser(id);
  }

  goBack(): void {
    this.location.back();
  }
}
