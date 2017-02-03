import { trigger, state, style, transition, animate } from '@angular/core';
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
                                    <tr *ngFor="let country of countries; trackBy:trackCountry">
                                        <td [@selectedState]="country.selectedState" abDragger (click)="selectMe(country)">
                                         <a [routerLink]="['/country/' + country.countryId]"> {{country.name}} </a>
                                       </td>
                                        <td>{{country.language}}</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`,
    animations: [trigger('selectedState', [
      state('no', style({
        fontSize: '1em'
      })),
      state('yes',   style({
        fontSize: '2em'
      })),
      transition('no => yes', animate('300ms ease-in')),
      transition('yes => no', animate('300ms ease-out'))
    ])]

})
export class CountryListComponent {

    countries: any[] = [{
       selectedState: "no",
        countryId: 1,
        name: "United Kingdom",
        language: "English"
    }, {
       selectedState: "no",
        countryId: 2,
        name: "United States of America",
        language: "English"
    }, {
       selectedState: "no",
        countryId: 3,
        name: "Australia",
        language: "English"
    }, {
       selectedState: "no",
        countryId: 4,
        name: "Germany",
        language: "German"
    }, {
       selectedState: "no",
        countryId: 5,
        name: "Austria",
        language: "German"
    }];


    trackCountry(i: number, country: any): number {
        return country.id;
    }

    addCountry(country: any) {
        this.countries.push({selectedState: "yes",countryId: country.countryId, name: country.name, language: "Something foreign"});
    }

    selectMe(country: any) {
        this.countries.forEach(element => {
            element.selectedState = "no";
            if(element.countryId === country.countryId) {
                element.selectedState = "yes";
            }
        });

    }

    dropped() {
        alert('you dropped me');
    }
}