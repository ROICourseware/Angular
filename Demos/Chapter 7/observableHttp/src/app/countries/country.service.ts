import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'api/countries';

  constructor(private httpClient: HttpClient) { }


  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.url);
  }

  addCountry(country: Country): Observable<Country> {
    return this.httpClient.post<Country>(this.url, country);
  }


}
