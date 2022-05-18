import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  createDb(): any {
    const countries: Country[] = [{
      countryId: 1,
      name: 'United Kingdom',
      language: 'English'
    }, {
      countryId: 2,
      name: 'United States of America',
      language: 'English'
    }, {
      countryId: 3,
      name: 'Australia',
      language: 'English'
    }, {
      countryId: 4,
      name: 'Germany',
      language: 'German'
    }, {
      countryId: 5,
      name: 'Austria',
      language: 'German'
    }];
    return { countries };
  }

  genId(countries: Country[]): number {
    return countries.length > 0 ? Math.max(...countries.map(country => country.countryId)) + 1 : 11;
  }
}
