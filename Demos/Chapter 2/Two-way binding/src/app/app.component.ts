import { CountryListComponent } from './books/country-list.component';
import { CountryPassedInComponent } from './books/country-passed-in.component';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <country-list></country-list>
             <!--country-passed-in [countries]="parentCountries"
             (delete)="removeCountry($event)"></country-passed-in-->`
})
export class AppComponent {
  name = "Angles On Books";

  parentCountries: any[] = [{
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


  removeCountry(e: any) {
    const index = this.parentCountries
      .map(function (item) { return item.countryId; })
      .indexOf(e.country.countryId);
    this.parentCountries.splice(index, 1);
  }

}
