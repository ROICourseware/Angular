import { Component } from '@angular/core';

@Component({
    selector: 'country-list',
    template: `<div class="container-fluid mainPanel">
                    <div class="row">
                        <h2 class="col-sm-offset-1">Countries</h2>
                        <div class="col-lg-8 col-sm-offset-1">
                            <table class="table table-border table-striped">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let country of countries; trackBy:trackCountry">
                                        <td>
                                         <a  [routerLink]="['/countries', {outlets: {'countries': ['list'], 'country': [country.countryId]}}]"> {{country.name}} </a>
                                       </td>
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

    raiseAlert() {
        alert("You clicked the button");
    }

    moveMe(e: any) {
        console.log(e.target);
    }

    trackCountry(i: number, country: any): number {
        return country.id;
    }

}