import { TestBed } from '@angular/core/testing';

import { BugreportService } from './bugreport.service';

describe('BugreportService', () => {
  let service: BugreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
