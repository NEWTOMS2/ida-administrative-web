import { TestBed } from '@angular/core/testing';

import { IsTokenValidGuard } from './is-token-valid.guard';

describe('IsTokenValidGuard', () => {
  let guard: IsTokenValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsTokenValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
