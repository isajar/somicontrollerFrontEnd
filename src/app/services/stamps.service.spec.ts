import { TestBed, inject } from '@angular/core/testing';

import { StampsService } from './stamps.service';

describe('StampsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StampsService]
    });
  });

  it('should be created', inject([StampsService], (service: StampsService) => {
    expect(service).toBeTruthy();
  }));
});
