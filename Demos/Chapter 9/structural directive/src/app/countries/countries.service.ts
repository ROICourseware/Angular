import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

    private url = 'api/countries';

    constructor(private httpClient: HttpClient) { }

  
  getCountries() {
    return this.httpClient.get<Country[]>(this.url).toPromise()
        .catch(this.handleError);

}

addCountry(country: Country) {
    return this.httpClient.post<Country>(this.url, country).toPromise()
    .catch(this.handleError);
}

private handleError(error: any) {
    console.log('in the error handler');
    let err = error.message  
              ? error.message 
              : (error.status 
                 ? `${error.status} - ${error.statusText}` 
                 : 'Server error');
    return Promise.reject(err);
}


}



