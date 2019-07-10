import { TestBed } from '@angular/core/testing';

import { UserSelectionService } from './user-selection.service';

describe('UserSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSelectionService = TestBed.get(UserSelectionService);
    expect(service).toBeTruthy();
  });
});
