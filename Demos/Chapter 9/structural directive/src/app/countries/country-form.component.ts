import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor(private countriesService: CountriesService, private router: Router) {}

  country: any= {name: "", language: "", countryId: 42 } ;
  
  submit() {
      this.countriesService.addCountry(this.country).then(() => {
        this.router.navigate(['/countries'])
      });
  }

  ngOnInit() {
  }

}
