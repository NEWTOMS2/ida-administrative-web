import { TestBed } from '@angular/core/testing';

import { CommunicationDetailResolver } from './communication-detail.resolver';

describe('CommunicationDetailResolver', () => {
  let resolver: CommunicationDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CommunicationDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
