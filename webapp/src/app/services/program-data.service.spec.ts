import { TestBed } from '@angular/core/testing';

import { ProgramDataService } from './program-data.service';

describe('ProgramDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramDataService = TestBed.get(ProgramDataService);
    expect(service).toBeTruthy();
  });
});
