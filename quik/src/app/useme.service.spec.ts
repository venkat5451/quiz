import { TestBed } from '@angular/core/testing';

import { UsemeService } from './useme.service';

describe('UsemeService', () => {
  let service: UsemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
