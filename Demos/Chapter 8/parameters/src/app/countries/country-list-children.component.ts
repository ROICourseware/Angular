import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country-list-children',
  templateUrl: './country-list-children.component.html',
  styleUrls: ['./country-list-children.component.css']
})
export class CountryListChildrenComponent implements OnInit {

  countries!: any[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }


  trackCountry(i: number, country: any): number {
    return country.id;
  }
}
