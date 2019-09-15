import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { IUser, USERS_URL, mockedUsers } from '../../User';
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

  describe('#getUsers_opt1', () => {

    beforeEach(() => {
      usersService = TestBed.get(UsersService);
    });

    it('should return expected users (called once)', () => {

      usersService.getUsers().subscribe(
        users => expect(users).toEqual(mockedUsers),
        fail
      );

      // UsersService should have made one request to GET users from expected URL
      const req = httpTestingController.expectOne(USERS_URL);
      expect(req.request.method).toEqual('GET');

      // const expectedResponse = new HttpResponse(
      //   { status: 200, statusText: 'OK', body: expectedUsers });
      // req.event(expectedResponse);

      // Respond with the mock users
      req.flush(mockedUsers);
    });
  });

  describe('#getUsers_opt2', () => {

    beforeEach(() => {
      usersService = TestBed.get(UsersService);
    });

    it('should return expected users (called once)', () => {

    });
  });

});

// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//
// // Other imports
// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpResponse } from '@angular/common/http';
//
// import { Hero } from './hero';
// import { HeroesService } from './heroes.service';
// import { HttpErrorHandler } from '../http-error-handler.service';
// import { MessageService } from '../message.service';
//
// describe('HeroesService', () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let heroService: HeroesService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // Import the HttpClient mocking services
//       imports: [ HttpClientTestingModule ],
//       // Provide the service-under-test and its dependencies
//       providers: [
//         HeroesService,
//         HttpErrorHandler,
//         MessageService
//       ]
//     });
//
//     // Inject the http, test controller, and service-under-test
//     // as they will be referenced by each test.
//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//     heroService = TestBed.get(HeroesService);
//   });
//
//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });
//
//   /// HeroService method tests begin ///
//
//   describe('#getHeroes', () => {
//     let expectedHeroes: Hero[];
//
//     beforeEach(() => {
//       heroService = TestBed.get(HeroesService);
//       expectedHeroes = [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' },
//        ] as Hero[];
//     });
//
//     it('should return expected heroes (called once)', () => {
//
//       heroService.getHeroes().subscribe(
//         heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
//         fail
//       );
//
//       // HeroService should have made one request to GET heroes from expected URL
//       const req = httpTestingController.expectOne(heroService.heroesUrl);
//       expect(req.request.method).toEqual('GET');
//
//       // Respond with the mock heroes
//       req.flush(expectedHeroes);
//     });
//
//     it('should be OK returning no heroes', () => {
//
//       heroService.getHeroes().subscribe(
//         heroes => expect(heroes.length).toEqual(0, 'should have empty heroes array'),
//         fail
//       );
//
//       const req = httpTestingController.expectOne(heroService.heroesUrl);
//       req.flush([]); // Respond with no heroes
//     });
//
//     // This service reports the error but finds a way to let the app keep going.
//     it('should turn 404 into an empty heroes result', () => {
//
//       heroService.getHeroes().subscribe(
//         heroes => expect(heroes.length).toEqual(0, 'should return empty heroes array'),
//         fail
//       );
//
//       const req = httpTestingController.expectOne(heroService.heroesUrl);
//
//       // respond with a 404 and the error message in the body
//       const msg = 'deliberate 404 error';
//       req.flush(msg, {status: 404, statusText: 'Not Found'});
//     });
//
//     it('should return expected heroes (called multiple times)', () => {
//
//       heroService.getHeroes().subscribe();
//       heroService.getHeroes().subscribe();
//       heroService.getHeroes().subscribe(
//         heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
//         fail
//       );
//
//       const requests = httpTestingController.match(heroService.heroesUrl);
//       expect(requests.length).toEqual(3, 'calls to getHeroes()');
//
//       // Respond to each request with different mock hero results
//       requests[0].flush([]);
//       requests[1].flush([{id: 1, name: 'bob'}]);
//       requests[2].flush(expectedHeroes);
//     });
//   });
//
//   describe('#updateHero', () => {
//     // Expecting the query form of URL so should not 404 when id not found
//     const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;
//
//     it('should update a hero and return it', () => {
//
//       const updateHero: Hero = { id: 1, name: 'A' };
//
//       heroService.updateHero(updateHero).subscribe(
//         data => expect(data).toEqual(updateHero, 'should return the hero'),
//         fail
//       );
//
//       // HeroService should have made one request to PUT hero
//       const req = httpTestingController.expectOne(heroService.heroesUrl);
//       expect(req.request.method).toEqual('PUT');
//       expect(req.request.body).toEqual(updateHero);
//
//       // Expect server to return the hero after PUT
//       const expectedResponse = new HttpResponse(
//         { status: 200, statusText: 'OK', body: updateHero });
//       req.event(expectedResponse);
//     });
//
//     // This service reports the error but finds a way to let the app keep going.
//     it('should turn 404 error into return of the update hero', () => {
//       const updateHero: Hero = { id: 1, name: 'A' };
//
//       heroService.updateHero(updateHero).subscribe(
//         data => expect(data).toEqual(updateHero, 'should return the update hero'),
//         fail
//       );
//
//       const req = httpTestingController.expectOne(heroService.heroesUrl);
//
//       // respond with a 404 and the error message in the body
//       const msg = 'deliberate 404 error';
//       req.flush(msg, {status: 404, statusText: 'Not Found'});
//     });
//   });
//
//   // TODO: test other HeroService methods
// });
//
//
// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */
