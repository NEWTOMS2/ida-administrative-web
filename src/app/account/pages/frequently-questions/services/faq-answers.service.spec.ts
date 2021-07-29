import { TestBed } from '@angular/core/testing';

import { FaqAnswersService } from './faq-answers.service';

describe('FaqAnswersService', () => {
  let service: FaqAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
