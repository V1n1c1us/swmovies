import { TestBed, inject } from '@angular/core/testing';

import { SwserviceService } from './swservice.service';

describe('SwserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwserviceService]
    });
  });

  it('should be created', inject([SwserviceService], (service: SwserviceService) => {
    expect(service).toBeTruthy();
  }));
});
