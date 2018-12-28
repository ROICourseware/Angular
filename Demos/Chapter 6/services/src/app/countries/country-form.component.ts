import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  country: any= {name: "", language: "", countryId: -1 } ;
  
  submit() {
      this.countriesService.addCountry(this.country);
  }

  ngOnInit() {
  }

}
