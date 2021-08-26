import { TestBed } from '@angular/core/testing';

import { PhonePlanResolver } from './phone-plan.resolver';

describe('PhonePlanResolver', () => {
  let resolver: PhonePlanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhonePlanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
