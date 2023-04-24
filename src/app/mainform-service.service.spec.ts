import { TestBed } from '@angular/core/testing';

import { MainformServiceService } from './mainform-service.service';

describe('MainformServiceService', () => {
  let service: MainformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
