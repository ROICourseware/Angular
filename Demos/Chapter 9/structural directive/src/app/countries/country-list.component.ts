import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

    countries: any[] 

    constructor(private countryService: CountriesService) {}

    ngOnInit() {
         this.countryService.getCountries().then(countries => this.countries = countries);
    }

    trackCountry(i: number, country: any): number {
        return country.id;
    }




}
