import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
          HttpTestingController } from '@angular/common/http/testing';

import { BugReportService } from './bug-report.service';
import { HttpBackend } from '@angular/common/http';

describe('BugReportService', () => {
  let service: BugReportService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugReportService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(BugReportService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#approve()', ()=> {
    it('should have a returned observable', () => {
      const mockBugReport = {
        id: 1,
        reporter: null,
        resolver: null,
        application: 'Donkeys',
        location: 'DonkeyService',
        description: 'Missing donkeys',
        steps: 'Open app',
        severity: 'Critical',
        date: null,
        status: 'pending'
      };

      service.approve(mockBugReport).subscribe(res => {
        expect(res).toBeTruthy;
      });

      const req = httpTestingController.expectOne('http://localhost:8080/bugreport/');
      expect(req.request.method).toEqual('POST');
      req.flush(mockBugReport);
    });
  });

  describe('#deny()', ()=> {
    it('should have a returned observable', () => {
      const mockBugReport = {
        id: 1,
        reporter: null,
        resolver: null,
        application: 'Donkeys',
        location: 'DonkeyService',
        description: 'Missing donkeys',
        steps: 'Open app',
        severity: 'Critical',
        date: null,
        status: 'pending'
      };

      service.deny(mockBugReport).subscribe(res => {
        expect(res).toBeTruthy;
      });

      const req = httpTestingController.expectOne('http://localhost:8080/bugreport/');
      expect(req.request.method).toEqual('POST');
      req.flush(mockBugReport);
    });
  });

});
