import { CountryListComponent } from './books/country-list.component';
import { CountryPassedInComponent } from './books/country-passed-in.component';
import { BookListComponent } from './books/book-list.component';
import { Component } from '@angular/core';
import '../../public/css/bootstrap.min.css';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
             <book-list></book-list>
             <!--country-list></country-list-->
             <!--country-passed-in [countries]="parentCountries"></country-passed-in-->`
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
  }];

}
