import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OpenBugsService } from './openbugs.service';

describe('OpenBugsServiceService', () => {
  let service: OpenBugsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [OpenBugsService]  
    });
  });

  it('should be created', () => {
    const service: OpenBugsService = TestBed.get(OpenBugsService);
    expect(service).toBeTruthy();
  });
});
