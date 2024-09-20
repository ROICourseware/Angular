import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { countriesGuard } from './countries.guard';

describe('countriesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => countriesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
