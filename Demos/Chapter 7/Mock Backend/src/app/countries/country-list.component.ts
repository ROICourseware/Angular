import { CountryService } from './country.service';
import { CountryFormComponent } from './country-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'country-list',
    template: `<div class="container-fluid mainPanel">
                    <div *ngIf="errorMessage" class="alert alert-danger">
                        Sorry, there's been an error communicating with the server: {{errorMessage}}
                    </div>   
                    <div class="row">
                        <country-form (countryAdded)="getCountries()" ></country-form>
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
export class CountryListComponent implements OnInit {

    countries: any[]
    errorMessage: string;

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.getCountries();
    }

    getCountries() {
        this.countryService.getCountries()
            .then(countries => this.countries = countries)
            .catch(error => this.errorMessage = error);
    }

    trackCountry(i: number, country: any): number {
        return country.id;
    }

}