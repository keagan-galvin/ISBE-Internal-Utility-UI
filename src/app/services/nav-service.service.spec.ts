import { TestBed, inject } from '@angular/core/testing';

import { AppNavService } from './nav-service.service';

describe('AppNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppNavService]
    });
  });

  it('should be created', inject([AppNavService], (service: AppNavService) => {
    expect(service).toBeTruthy();
  }));
});
