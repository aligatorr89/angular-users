import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { IUser } from '../User'
import { UsersService } from './users.service';

const mockUsers: IUser = {
  "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
};

let usersService: UsersService;
// let usersClientSpy: {get: jest.SpyInstance}
// const http: any = {
//   get: jest.fn(() => {
//     Observable. (mockUsers)
//   })
// };

describe('UsersService', () => {
  // usersClientSpy = jest.createSpyObj('HttpClient', ['get']);

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HttpClientTestingModule,
      UsersService
    ],
  }));

  usersService = TestBed.get(UsersService);

  it('should be created', () => {
    expect(usersService.getUsers()).toBe('real value');
  });

});
