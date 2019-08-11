import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
<<<<<<< HEAD
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
=======
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { IUser, mockedUsers } from '../User'
import { UsersService } from './users.service';

describe('UsersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let usersService: UsersService;

  beforeEach(() => {
    // httpClientSpy = jest.mock('HttpClient', ['get']);
    // usersService = new UsersService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        UsersService
      ]
    });
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    usersService = TestBed.get(UsersService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#getUsers', () => {

    beforeEach(() => {
      usersService = TestBed.get(UsersService);
    });

    it('should return expected users (called once)', () => {

      usersService.getUsers().subscribe(
        users => expect(users).toEqual(mockedUsers),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(usersService.usersUrl);
      expect(req.request.method).toEqual('GET');

      // const expectedResponse = new HttpResponse(
      //   { status: 200, statusText: 'OK', body: expectedUsers });
      // req.event(expectedResponse);

      // Respond with the mock heroes
      req.flush(mockedUsers);
    });
>>>>>>> jest-migration
  });

});
