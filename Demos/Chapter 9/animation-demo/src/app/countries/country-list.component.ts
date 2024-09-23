import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  animations: [trigger('selectedState', [
    state('no', style({
      fontSize: '1em'
    })),
    state('yes',   style({
      fontSize: '2em'
    })),
    transition('no => yes', animate('300ms ease-in')),
    transition('yes => no', animate('300ms ease-out'))
  ])]
})
export class CountryListComponent implements OnInit {

  countries: any[] = [{
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

  constructor() { }

  ngOnInit(): void {
  }


  trackCountry(i: number, country: any): number {
    return country.id;
  }

  selectMe(country: any): void {
    this.countries.forEach(element => {
      element.selectedState = 'no';
      if (element.countryId === country.countryId) {
        element.selectedState = 'yes';
      }
    });
  }
}
