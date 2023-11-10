import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor() { }

  getCountries(): any[] {
    return countries;
  }

  addCountry(country: any): void {
    countries.push(country);
  }

  deleteCountry(country: any): void {
    const index = countries
      .map((item: any) => item.countryId)
      .indexOf(country.countryId);
    countries.splice(index, 1);
  }

}

const countries: any = [{
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


