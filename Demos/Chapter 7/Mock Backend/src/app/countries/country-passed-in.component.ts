import { CountryListComponent } from './country-list.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let country of countries; trackBy:trackCountry">
                                        <td><input [(ngModel)]="country.name"/> {{country.name}}</td>
                                        <td>{{country.language}}</td>
                                        <td><button (click)="deleteCountry($event, country)">X</button></td>
                                    </tr>       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`
})
export class CountryPassedInComponent {

    @Input() countries: any[];

    @Output() delete = new EventEmitter();

    trackCountry(i: number, country: any): number {
        return country.id;
    }

    deleteCountry(e: any, country: any) {
        this.delete.emit({event: e, country: country});
    }

}