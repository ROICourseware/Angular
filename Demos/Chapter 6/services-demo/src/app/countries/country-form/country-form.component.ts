import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country-form.component.html',
  styleUrl: './country-form.component.css'
})
export class CountryFormComponent {

  constructor(private countriesService: CountryService) {}

  country: any = {name: '', language: '', countryId: -1 } ;

  submit(): void {
      this.countriesService.addCountry(this.country);
  }

  ngOnInit(): void {
  }
}
