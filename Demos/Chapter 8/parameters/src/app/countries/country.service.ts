import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = 'api/countries';

  constructor(private httpClient: HttpClient) { }


  getCountries(): Promise<Country[]> {
    return this.httpClient.get<Country[]>(this.url).toPromise()
      .catch(this.handleError);

  }

  addCountry(country: Country): Promise<Country> {
    return this.httpClient.post<Country>(this.url, country).toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): any {
    console.log('in the error handler');
    const err = error.message
      ? error.message
      : (error.status
        ? `${error.status} - ${error.statusText}`
        : 'Server error');
    return Promise.reject(err);
  }

}
