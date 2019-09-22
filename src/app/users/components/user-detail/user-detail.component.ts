import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../shared/models/User'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
