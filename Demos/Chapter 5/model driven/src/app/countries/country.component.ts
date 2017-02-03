import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'country',
    template: `<h1>You picked {{ countryId }} </h1>`
})
export class CountryComponent implements OnInit {
    countryId: number;
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        this.countryId = +this.route.snapshot.params['id'];
    }
}