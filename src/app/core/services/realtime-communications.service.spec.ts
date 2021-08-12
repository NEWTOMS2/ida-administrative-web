import { TestBed } from '@angular/core/testing';

import { RealtimeCommunicationsService } from './realtime-communications.service';

describe('RealtimeCommunicationsService', () => {
  let service: RealtimeCommunicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeCommunicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
