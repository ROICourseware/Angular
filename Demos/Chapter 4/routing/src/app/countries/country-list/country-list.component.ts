import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {


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

  trackCountry(i: number, country: any): number {
    return country.id;
  }

}
