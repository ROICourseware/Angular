import { CountryFormComponent } from './country-form.component';
import { Component } from '@angular/core';

@Component({
    selector: 'country-list',
    template: `<div class="container-fluid mainPanel">
                    <div class="row">
                        <country-form></country-form>
                    </div>
                    <div class="row">
                        <h2 class="col-sm-offset-1">Countries</h2>
                        <div class="col-lg-8 col-sm-offset-1">
                            <table class="table table-border table-striped">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Language</th>
                                    </tr>                                 
                                </thead>
                                <tbody>
                                    <tr *ngFor="let country of countries; trackBy:trackCountry">
                                        <td>
                                         <a [routerLink]="['/country/' + country.countryId]"> {{country.name}} </a>
                                       </td>
                                        <td>{{country.language}}</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`
})
export class CountryListComponent {

    countries: any[] = [{
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


    trackCountry(i: number, country: any): number {
        return country.id;
    }

}