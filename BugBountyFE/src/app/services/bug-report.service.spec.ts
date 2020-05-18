import { TestBed } from '@angular/core/testing';

import { BugReportService } from './bug-report.service';

describe('BugReportService', () => {
  let service: BugReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
