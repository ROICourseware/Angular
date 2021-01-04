import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  actionName = 'Add';
  country: any = { name: 'England' };
  countries: any[] = [{ name: 'Wales' }];

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.countries.push( { name: this.country.name });
  }

}
