import { Inject, Injector, inject, InjectionToken, ReflectiveInjector }
  from '@angular/core';
import { HttpClient, HttpBackend, HttpHandler, HttpXhrBackend, XhrFactory }
  from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { mockedUsers, USERS_URL } from '../User';

export class BrowserXhr implements XhrFactory {
  build(): any { return <any>(new XMLHttpRequest()); }
}

const dependencyInjector = ReflectiveInjector.resolveAndCreate([
  HttpClient,
  HttpXhrBackend,
  { provide: HttpBackend, useExisting: HttpXhrBackend },
  { provide: HttpHandler, useExisting: HttpBackend },
  { provide: XhrFactory, useClass: BrowserXhr },

]);

let httpClient: HttpClient = dependencyInjector.get(HttpClient);
let httpTestingController: HttpTestingController;
let usersService: UsersService;

describe('UsersService microtest', () => {

  beforeEach(() => {
    usersService = new UsersService(httpClient);
  });

  test('getUsers() should call GET/users url', () => {
    usersService.getUsers().subscribe(
      users => expect(users).toEqual(mockedUsers)
    );

    const req = httpTestingController.expectOne(USERS_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockedUsers);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
