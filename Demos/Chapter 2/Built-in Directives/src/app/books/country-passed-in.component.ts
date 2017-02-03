import { Component, Input } from '@angular/core';

@Component({
    selector: 'country-passed-in',
    template: `<div class="container-fluid mainPanel">
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
                                        <td>{{country.name}}</td>
                                        <td>{{country.language}}</td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`
})
export class CountryPassedInComponent {

    @Input() countries: any[];

    trackCountry(i: number, country: any): number {
        return country.id;
    }

}