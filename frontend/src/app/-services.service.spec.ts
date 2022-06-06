import { TestBed } from '@angular/core/testing';

import { CustomerServiceService } from './-services.service';

describe('ServicesService', () => {
  let service: CustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
