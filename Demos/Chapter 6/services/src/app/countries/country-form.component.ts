import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor(private countriesService: CountryService) {}

  country: any = {name: '', language: '', countryId: -1 } ;

  submit(): void {
      this.countriesService.addCountry(this.country);
  }

  ngOnInit(): void {
  }
}
