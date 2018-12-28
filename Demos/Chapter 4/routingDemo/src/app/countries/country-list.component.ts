import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {



  countries: any[] = [{
    countryId: 1,
    name: "United Kingdom",
    language: "English"
}, {
    countryId: 2,
    name: "United States of America",
    language: "English"
}, {
    countryId: 3,
    name: "Australia",
    language: "English"
}, {
    countryId: 4,
    name: "Germany",
    language: "German"
}, {
    countryId: 5,
    name: "Austria",
    language: "German"
}];

  constructor() { }

  ngOnInit() {
  }

trackCountry(i: number, country: any): number {
    return country.id;
}
}
