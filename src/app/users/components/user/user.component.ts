import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from "../../services/users.service";
import { IUser } from "../../../User";

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
    // private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.user$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.usersService.getUser(params.get('id')))
    // );
    this.user$ = this.usersService.getUser(id);
  }

  // goBack(): void {
  //   // this.location.back();
  // }
}
