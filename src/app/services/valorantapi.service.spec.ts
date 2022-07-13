import { TestBed } from '@angular/core/testing';

import { valorantapiService } from './valorantapi.service';

describe('valorantapiService', () => {
  let service: valorantapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(valorantapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
