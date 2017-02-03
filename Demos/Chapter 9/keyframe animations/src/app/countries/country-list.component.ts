import { trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { bobble } from './animations';
import { CountryFormComponent } from './country-form.component';
import { Component } from '@angular/core';

@Component({
    selector: 'country-list',
    template: `<div class="container-fluid mainPanel">
                    <div class="row">
                        <country-form (countryAdded)="addCountry($event)"></country-form>
                    </div>
                    <div class="row">
                        <h2 class="col-sm-offset-1">Countries</h2>
                        <div class="col-lg-8 col-sm-offset-1">
                            <table class="table table-border table-striped">
                                <thead>
                                    <tr abDrop (onDropped)="dropped()">
                                        <th>Country</th>
                                        <th>Language</th>
                                    </tr>                                 
                                </thead>
                                <tbody>
                                    <tr @slideDown *ngFor="let country of countries; trackBy:trackCountry">
                                        <td abDragger>
                                         <a [routerLink]="['/country/' + country.countryId]"> {{country.name}} </a>
                                       </td>
                                        <td>{{country.language}}</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`,
    animations: [trigger('slideDown', [
                    transition(':enter', [
                        animate(400, keyframes([
                            style({ transform: 'translateY(-1000%)', offset: 0 }),
                            style({ transform: 'translateY(10px)', offset: 0.6 }),
                            style({ transform: 'translateY(0)', offset: 1.0 })
                        ]))
                    ])
                ]),
                bobble()]

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

    addCountry(country: any) {
        this.countries.push({ countryId: country.countryId, name: country.name, language: "Something foreign"});
    }

    dropped() {
        alert('you dropped me');
    }
}