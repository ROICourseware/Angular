import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountryFormComponent } from '../country-form/country-form.component';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CountryFormComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {


 
  countries!: any[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
  }


  trackCountry(i: number, country: any): number {
    return country.id;
  }

}
