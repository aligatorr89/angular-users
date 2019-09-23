import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersEffects } from './users.effects';
import { UsersService } from '../services/users.service';

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersEffects;
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
        UsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<UsersEffects>(UsersEffects);
    service = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
