import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
  });
});
