import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CountryService } from './country.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries$!: Observable<any[]>;
  errorMessage = '';

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries()
    .pipe(catchError((error) => {
            this.errorMessage = error;
            return of([]);
          })
     );
  }


  trackCountry(i: number, country: any): number {
    return country.id;
  }
}
