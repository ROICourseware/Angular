import { TestBed, async, inject } from '@angular/core/testing';

import { CountriesGuard } from './countries.guard';

describe('CountriesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesGuard]
    });
  });

  it('should ...', inject([CountriesGuard], (guard: CountriesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
