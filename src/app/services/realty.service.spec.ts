import { TestBed, inject } from '@angular/core/testing';

import { RealtyService } from './realty.service';

describe('RealtyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtyService]
    });
  });

  it('should be created', inject([RealtyService], (service: RealtyService) => {
    expect(service).toBeTruthy();
  }));
});
