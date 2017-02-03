import { Injectable } from '@angular/core';


@Injectable()
export class CountryService {

    getCountries() {
        return countries;
    }
    
    addCountry(country: any) {
        countries.push(country);
    }

    deleteCountry(country: any) {
        const index = countries
            .map(function (item: any) { return item.countryId; })
            .indexOf(country.countryId);
        countries.splice(index, 1);
    }

}

const countries: any = [{
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

