import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class CountryService {
    private url = 'api/countries';
    constructor(private http: Http) { }

    getCountries() {
        return this.http.get(this.url)
            .toPromise()
            .then(res => res.json().data as any[])
          //  .then(() =>  {throw new TypeError("Woops")})
            .catch(this.handleError);

    }

    addCountry(country: any) {
        return this.http.post(this.url, country, {
            headers: new Headers({
                'content-type': 'application/json'
            })
        }).toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let err = error.message  
                  ? error.message 
                  : (error.status 
                     ? `${error.status} - ${error.statusText}` 
                     : 'Server error');
        return Promise.reject(err);
    }



}



