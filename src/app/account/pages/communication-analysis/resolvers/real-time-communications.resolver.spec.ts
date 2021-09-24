import { TestBed } from '@angular/core/testing';

import { RealTimeCommunicationsResolver } from './real-time-communications.resolver';

describe('RealTimeCommunicationsResolver', () => {
  let resolver: RealTimeCommunicationsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RealTimeCommunicationsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
