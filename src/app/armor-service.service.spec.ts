import { TestBed } from '@angular/core/testing';

import { ArmorServiceService } from './armor-service.service';

describe('ArmorServiceService', () => {
  let service: ArmorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
