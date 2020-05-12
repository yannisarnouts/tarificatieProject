import { TestBed } from '@angular/core/testing';

import { TarificationService } from './tarification.service';

describe('TarificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarificationService = TestBed.get(TarificationService);
    expect(service).toBeTruthy();
  });
});
