import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';

let usersService: UsersService;
// let usersClientSpy: {get: jasmine.Spy}

describe('UsersService', () => {
  // usersClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  // usersService = new UsersService(<any>usersClientSpy);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [//UsersService
    ],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
