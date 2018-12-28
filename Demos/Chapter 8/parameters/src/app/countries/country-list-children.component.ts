import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list-children',
  templateUrl: './country-list-children.component.html',
  styleUrls: ['./country-list-children.component.css']
})
export class CountryListChildrenComponent implements OnInit {


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
    name: "Germany",
    language: "German"
}
];


  constructor() { }
  ngOnInit() {
  }

  trackCountry(i: number, country: any): number {
    return country.id;
  }
}
